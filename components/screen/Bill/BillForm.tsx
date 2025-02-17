import FormikDatePicker from '@/components/formik/FormikDatePicker';
import FormikInput from '@/components/formik/FormikInput';
import FormikRadio from '@/components/formik/FormikRadio';
import FormikSelect from '@/components/formik/FormikSelect';
import FormikTextarea from '@/components/formik/FormikTextarea';
import { Title } from '@/components/ui/HeadText';
import statementActivityType from '@/constant/statementActivityType';
import { readCustomers } from '@/lib/filesystem/customer';
import { GetToday } from '@/lib/moment';
import { useGlobalStore } from '@/store/global';
import { Option } from '@/types';
import globalStyle from '@/utils/globalStyle';
import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';

const BillForm = ({ hiddenFieldName = [] }: { hiddenFieldName?: string[] }) => {
  const today = GetToday('YYYY-MM-DD');
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const [customerList, setCustomerList] = React.useState<Option[]>([]);

  const fetchCustomerList = async () => {
    const result = await readCustomers();
    setCustomerList(
      result?.map((item: any) => ({
        label: `${item?.firstName} ${item?.lastName}`,
        value: item?.id,
      }))
    );
  };

  React.useEffect(() => {
    fetchCustomerList();
  }, []);

  const activityTypeOptionList = statementActivityType(iconColor).map((item) => ({
    label: item.label,
    value: item.value,
  }));

  const handleActivityTypeIcon = (value: string): React.ReactNode => {
    return statementActivityType(iconColor).find((item) => item.value === value)?.icon;
  };

  const renderItem = (item: any) => {
    return (
      <ScrollView>
        <View className="flex flex-row justify-start items-center gap-4 py-3 px-4">
          <View>{handleActivityTypeIcon(item?.value)}</View>
          <View>
            <Title>{item.label}</Title>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View className="mt-4">
      <View className="mb-3">
        <FormikSelect
          name="activityType"
          placeholder="bill type"
          optionList={activityTypeOptionList}
          renderLeftIcon={() => (
            <AntDesign
              name="picture"
              size={globalStyle.icon.size}
              color={iconColor}
              className="mr-2"
            />
          )}
          renderItem={renderItem}
        />
      </View>
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
      {!hiddenFieldName.includes('customer') ? (
        <View className="mb-3">
          <FormikSelect
            name="customer"
            placeholder="Customer Name"
            optionList={customerList}
            renderLeftIcon={() => (
              <Feather
                name="user"
                size={globalStyle.icon.size}
                color={iconColor}
                className="mr-2"
              />
            )}
          />
        </View>
      ) : null}
      <View className="mb-3">
        <FormikDatePicker
          name="date"
          maxDate={today}
          icon={
            <Ionicons
              name="calendar-number-outline"
              size={globalStyle.icon.size}
              color={iconColor}
            />
          }
        />
      </View>
      <View className="mb-3">
        <FormikInput
          name="amount"
          placeholder="Amount"
          keyboardType="numeric"
          icon={<FontAwesome name="rupee" size={globalStyle.icon.size} color={iconColor} />}
        />
      </View>
      <View className="mb-3">
        <FormikInput
          name="transactionType"
          placeholder="Transaction type (online, cash, etc...)"
          icon={<MaterialIcons name="payments" size={globalStyle.icon.size} color={iconColor} />}
        />
      </View>
      <View className="mb-3">
        <FormikTextarea
          name="message"
          placeholder="Message"
          icon={<Foundation name="page-edit" size={globalStyle.icon.size} color={iconColor} />}
        />
      </View>
    </View>
  );
};

export default BillForm;
