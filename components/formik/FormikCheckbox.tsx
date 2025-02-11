import { Option } from '@/types';
import { useField } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import CheckBox, { CheckBoxProps, OptionWithId } from '../ui/Input/CheckBox';

interface FormikCheckboxProps extends CheckBoxProps {
  name: string;
  disabled?: boolean;
  optionList: Option[];
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ name, disabled, optionList }) => {
  const [field, meta, helpers] = useField(name);

  const handleOnChange = (selected: OptionWithId[]) => {
    helpers.setValue(selected);
  };

  return (
    <View>
      <CheckBox optionList={optionList} onChange={handleOnChange} editable={disabled} />
      {meta.touched && meta.error && <Text>{meta.error}</Text>}
    </View>
  );
};

export default FormikCheckbox;
