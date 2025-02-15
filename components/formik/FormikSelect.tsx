import { Option } from '@/types';
import { useField } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import { IDropdownRef } from 'react-native-element-dropdown';
import SelectBox, { SelectBoxProps } from '../ui/Input/SelectBox';

interface FormikSelectProps extends Omit<SelectBoxProps, 'data' | 'onChange'> {
  name: string;
  disabled?: boolean;
  readonly?: boolean;
}

const FormikSelect = React.forwardRef<IDropdownRef, FormikSelectProps>(
  ({ label, name, optionList, ...props }, ref) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = (item: Option) => {
      helpers.setValue(item); // Store only `{ label, value }`
    };

    return (
      <View>
        <SelectBox
          ref={ref}
          label={label}
          value={field.value?.value || null}
          optionList={optionList}
          onChange={handleOnChange}
          {...props}
        />
        {meta.touched && meta.error && <Text className="text-red-500">{meta.error}</Text>}
      </View>
    );
  }
);

export default React.memo(FormikSelect);
