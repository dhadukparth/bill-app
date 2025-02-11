import { Option } from '@/types';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export type OptionWithId = Option & { id: string | number };

export interface CheckBoxProps {
  optionList: Option[];
  onChange?: (selectedValue: OptionWithId[]) => void;
  editable?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ optionList, onChange, editable = true }) => {
  const [checked, setChecked] = React.useState<OptionWithId[]>(() => {
    return optionList
      .filter((item) => item.default === true)
      .map((item, index) => ({ id: index, ...item }));
  });

  const handleCheckValue = (index: any) => {
    return checked.find((item) => item.id === index);
  };

  const handleOnChange = (value: OptionWithId) => {
    if (handleCheckValue(value.id)) {
      const setData = checked.filter((item) => item.label !== value.label && item.id === value.id);
      setChecked(setData);
      onChange && onChange(setData);
    } else {
      const setData = [value, ...checked];
      setChecked(setData);
      onChange && onChange(setData);
    }
  };

  return (
    <View>
      {optionList.map((item: Option, index) => (
        <View key={index}>
          <Pressable
            onPress={() => {
              editable ? handleOnChange({ id: index, ...item }) : {};
            }}
            className="flex flex-row justify-start items-center gap-2 mb-2"
          >
            {handleCheckValue(index) ? (
              <View className="size-5">
                <Feather name="check" size={globalStyle.icon.size} color={globalStyle.icon.color} />
              </View>
            ) : (
              <View className="size-5 border border-black dark:border-white"></View>
            )}
            <Text className="text-gray-800 dark:text-white font-poppins-medium font-medium mt-1">
              Remember Me
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default React.memo(CheckBox);
