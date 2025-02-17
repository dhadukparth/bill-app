import globalStyle from '@/utils/globalStyle';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

type transactionListType = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const statementActivityType = (
  iconColor: string = globalStyle.colors.black
): transactionListType[] => {
  return [
    {
      label: 'Walmart Superstore',
      value: 'walmart-superstore',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      value: "mcdonald's",
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      value: 'shell-gas-station',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      value: 'rent-payment',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      value: 'salary-deposit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
  ];
};

export default statementActivityType;
