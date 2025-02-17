import { useGlobalStore } from '@/store/global';
import { Option } from '@/types';
import globalStyle from '@/utils/globalStyle';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown, IDropdownRef } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

export interface SelectBoxProps
  extends Omit<DropdownProps<any>, 'data' | 'labelField' | 'valueField'> {
  label?: string;
  optionList: Option[];
}

const SelectBox = React.memo(
  React.forwardRef<IDropdownRef, SelectBoxProps>(
    (
      {
        label,
        optionList,
        onChange,
        placeholder = 'Select',
        searchPlaceholder = 'Search...',
        ...props
      },
      ref
    ) => {
      const getCurrentTheme = useGlobalStore((state) => state.global.theme);
      const backgroundColor =
        getCurrentTheme === 'light' ? globalStyle.colors.gray[100] : globalStyle.colors.gray[800];
      const color =
        getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

      return (
        <View className="mb-2">
          {label && (
            <View className="mb-1">
              <Text className="text-lg font-normal font-inter-regular text-black dark:text-white">
                {label}
              </Text>
            </View>
          )}
          <View className="relative">
            <Dropdown
              ref={ref}
              data={optionList}
              search
              style={[styles.dropdown, { backgroundColor }]}
              searchPlaceholderTextColor={color}
              placeholderStyle={[styles.labelText, { color }]}
              inputSearchStyle={[styles.labelText, { color }]}
              containerStyle={{ backgroundColor }}
              itemTextStyle={[styles.labelText, { color }]}
              selectedTextStyle={[styles.labelText, { color }]}
              activeColor={globalStyle.colors.gray[500]}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={placeholder}
              searchPlaceholder={searchPlaceholder}
              onChange={onChange}
              {...props}
            />
          </View>
        </View>
      );
    }
  )
);

export default SelectBox;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  dropdown: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: globalStyle.colors.white,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    width: '100%',
  },
});
