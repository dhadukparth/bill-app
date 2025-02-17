import { ConvertToUTC, GetToday } from '@/lib/moment';
import * as FileSystem from 'expo-file-system';
import { ToastAndroid } from 'react-native';
import { readCustomers } from './customer';

export type newBillType = {
  customerId: string;
  amount: number;
  billType: string;
  date: string;
  transactionType: string;
  message?: string;
  activityType: string;
};

const fileUri = `${FileSystem.documentDirectory}statements.json`;

// Function to read the existing customers
export const readBills = async (customerId: string = '', billId: string = '') => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    if (!fileInfo.exists) {
      return [];
    }

    const content = await FileSystem.readAsStringAsync(fileUri);
    const statement = JSON.parse(content);

    // specific customer statements information
    if (customerId?.length) {
      const specificCustomerStatement = statement
        ?.filter((item: any) => item?.customerId === customerId)
        ?.sort(
          (a: any, b: any) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
        );

      const customerData = await readCustomers(customerId);

      // specific statement information
      if (billId?.length) {
        return {
          customer: customerData,
          statement: specificCustomerStatement?.find((item: any) => item?.id == billId),
        };
      }

      if (specificCustomerStatement?.length) {
        return {
          customer: customerData,
          statementList: specificCustomerStatement,
        };
      }

      return [];
    } else {
      return statement?.sort(
        (a: any, b: any) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
      );
    }
  } catch (error) {
    console.error('Error reading customer data:', error);
    return [];
  }
};

// Function to get all transaction peoples
export const getTransactionPeoples = async (): Promise<any[]> => {
  try {
    const statementsList = await readBills();

    const notDuplicateUserId = new Set();
    statementsList?.forEach((item: any) => {
      notDuplicateUserId.add(item?.customerId);
    });

    const customerList = await readCustomers();
    const userData = customerList?.filter((item: any) => notDuplicateUserId.has(item?.id));

    if (userData?.length) {
      return userData?.sort(
        (a: any, b: any) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
      );
    }

    return [];
  } catch (error) {
    console.error('Error reading customer data:', error);
    return [];
  }
};

// Function to create a new bill or statement
export const createBill = async (newBill: newBillType): Promise<boolean | string> => {
  try {
    const statements = await readBills();

    //     const isDuplicate = customers.some(
    //       (c: customerDataType) => c.email.toLowerCase() === customer.email.toLowerCase()
    //     );
    //     if (isDuplicate) {
    //       ToastAndroid.show('Customer is already existing!', ToastAndroid.SHORT);
    //       return false;
    //     }

    const getCurrentUtc = ConvertToUTC(GetToday(), 'UTC');
    const generateId = `${getCurrentUtc}${statements?.length + 1}`;

    statements.push({
      id: generateId,
      created_at: new Date().toISOString(),
      ...newBill,
    });

    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(statements, null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    ToastAndroid.show('Bill save successfully', ToastAndroid.SHORT);
    return generateId;
  } catch (error) {
    console.error('Error saving customer data:', error);
    return false;
  }
};

// Function clear all bills
export const clearAllBills = async (): Promise<boolean> => {
  try {
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([], null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
