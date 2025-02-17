import { Option } from '@/types';
import { useField } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import RadioButton, { RadioButtonProps } from '../ui/Input/RadioButton';

interface FormikRadioProps extends RadioButtonProps {
  name: string;
  disabled?: boolean;
  optionList: Option[];
}

const FormikRadioButton: React.FC<FormikRadioProps> = ({
  name,
  disabled,
  optionList,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleOnChange = React.useCallback((selected: Option) => {
    helpers.setValue(selected);
  }, []);

  return (
    <View>
      <RadioButton
        optionList={optionList}
        selectValue={field.value}
        onChange={handleOnChange}
        editable={disabled}
        {...props}
      />
      {meta.touched && meta.error && <Text>{meta.error}</Text>}
    </View>
  );
};

export default React.memo(FormikRadioButton);
