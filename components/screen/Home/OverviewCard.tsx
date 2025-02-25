import { Title } from '@/components/ui/HeadText';
import { getCalculateBalances } from '@/lib/filesystem/calculation';
import React from 'react';
import { View } from 'react-native';

const OverviewCard = ({ refresh }: { refresh: boolean }) => {
  const [calculateAmount, setCalculateAmount] = React.useState<any>(null);

  const fetchMonthAmount = async () => {
    const result = await getCalculateBalances();
    setCalculateAmount(result);
  };

  console.log(calculateAmount);

  React.useEffect(() => {
    fetchMonthAmount();
  }, []);

  return (
    <View className="my-8 bg-blue-600 py-8 px-6 rounded-3xl">
      <View className="mb-6">
        <Title size="xl" fonts="poppins-regular" className="mb-2 text-white">
          Total Revenue
        </Title>
        <Title size="3xl" fonts="inter-bold" className="text-white">
          {`₹ ${parseFloat(calculateAmount?.total).toFixed(2)}`}
        </Title>
      </View>
      <View className="flex flex-row justify-between items-center">
        <View>
          <Title size="large" fonts="poppins-regular" className="text-white">
            Total Credit
          </Title>
          <Title size="xl" fonts="inter-bold" className="text-white">
            {`₹ ${parseFloat(calculateAmount?.totalCredit).toFixed(2)}`}
          </Title>
        </View>
        <View>
          <Title size="large" fonts="poppins-regular" className="text-white">
            Total Debit
          </Title>
          <Title size="xl" fonts="inter-bold" className="text-white">
            {`₹ ${parseFloat(calculateAmount?.totalDebit).toFixed(2)}`}
          </Title>
        </View>
      </View>
    </View>
  );
};

export default OverviewCard;
