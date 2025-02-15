import FormikInput from '@/components/formik/FormikInput';
import FormikRadio from '@/components/formik/FormikRadio';
import FormikSelect from '@/components/formik/FormikSelect';
import { useGlobalStore } from '@/store/global';
import globalStyle from '@/utils/globalStyle';
import { Feather, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const BillForm = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  return (
    <View>
      <View className="mb-3">
        <FormikRadio
          name="type"
          className="flex flex-row justify-start items-center gap-4 px-3"
          optionList={[
            {
              label: 'Credit',
              value: 'credit',
            },
            {
              label: 'Debit',
              value: 'debit',
            },
          ]}
        />
      </View>
      <View className="mb-3">
        <FormikSelect
          name="customer"
          placeholder="Customer Name"
          optionList={[
            {
              label: 'Parth',
              value: 'parth',
            },
          ]}
          renderLeftIcon={() => (
            <Feather name="user" size={globalStyle.icon.size} color={iconColor} className="mr-2" />
          )}
        />
      </View>
      <View className="mb-3">
        <FormikInput
          name="customer"
          placeholder="Amount"
          icon={<FontAwesome name="rupee" size={globalStyle.icon.size} color={iconColor} />}
        />
      </View>
    </View>
  );
};

export default BillForm;
