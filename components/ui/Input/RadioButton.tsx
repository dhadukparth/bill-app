import { useGlobalStore } from '@/store/global';
import { Option } from '@/types';
import globalStyle from '@/utils/globalStyle';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export interface RadioButtonProps {
  optionList: Option[];
  onChange?: (selectedValue: Option) => void;
  editable?: boolean;
  className?: string;
}

const RedioButton: React.FC<RadioButtonProps> = ({
  optionList,
  onChange,
  className,
  editable = true,
}) => {
  const [checked, setChecked] = React.useState<Option>(optionList[0]);

  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const handleCheckValue = (value: Option) => {
    return checked.value === value.value;
  };

  const handleOnChange = (value: Option) => {
    onChange && onChange(value);
    setChecked(value);
  };

  return (
    <View className={className}>
      {optionList.map((item: Option, index) => (
        <View key={index} className="w-fit">
          <Pressable
            onPress={() => {
              editable ? handleOnChange(item) : {};
            }}
            className="flex flex-row justify-start items-center gap-2 mb-2"
          >
            {handleCheckValue(item) ? (
              <View className="size-5 border border-black dark:border-white rounded-full p-1">
                <View className="bg-blue-500 size-full rounded-full"></View>
              </View>
            ) : (
              <View className="size-5 border border-black dark:border-white rounded-full p-1"></View>
            )}
            <Text className="text-gray-800 dark:text-white font-poppins-medium font-medium mt-1">
              {item.label}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default React.memo(RedioButton);
