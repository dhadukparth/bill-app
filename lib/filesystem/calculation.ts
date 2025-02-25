import { readBills } from './bills';

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

export const getCalculateBalances = async () => {
  try {
    let totalCredit = 0;
    let totalDebit = 0;

    // Fetch current month's bills
    const statement = await readBills();
    if (!statement?.length) {
      return null;
    }

    // Calculate current month's credit and debit
    statement.forEach((item: any) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.getMonth() + 1;
      const itemYear = itemDate.getFullYear();

      if (itemMonth === currentMonth && itemYear === currentYear) {
        if (item.billType === 'credit') {
          totalCredit += item.amount;
        } else if (item.billType === 'debit') {
          totalDebit += item.amount;
        }
      }
    });

    // Fetch last month's balance
    const lastMonthBalance = await getLastMonthBalance();
    if (lastMonthBalance) {
      // Add last month's credit - last month's debit to current month's credit
      totalCredit += lastMonthBalance.totalCredit - lastMonthBalance.totalDebit;
    }

    return { totalCredit, totalDebit, total: totalCredit - totalDebit };
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Helper function to get last month's balance
const getLastMonthBalance = async () => {
  try {
    const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1; // Handle January edge case
    const lastYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    const lastMonthStatement = await readBills(); // Fetch all bills
    if (!lastMonthStatement?.length) {
      return null;
    }

    let lastMonthCredit = 0;
    let lastMonthDebit = 0;

    lastMonthStatement.forEach((item: any) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.getMonth() + 1;
      const itemYear = itemDate.getFullYear();

      if (itemMonth === lastMonth && itemYear === lastYear) {
        if (item.billType === 'credit') {
          lastMonthCredit += item.amount;
        } else if (item.billType === 'debit') {
          lastMonthDebit += item.amount;
        }
      }
    });

    return { totalCredit: lastMonthCredit, totalDebit: lastMonthDebit };
  } catch (error) {
    console.log(error);
    return null;
  }
};
