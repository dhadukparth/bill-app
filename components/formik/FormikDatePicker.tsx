import { useField } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import DatepickerBox, { DatepickerBoxProps } from '../ui/Input/Datepicker';

interface FormikDatePickerProps extends DatepickerBoxProps {
  name: string;
  icon?: React.ReactNode;
}

const FormikDatePicker: React.FC<FormikDatePickerProps> = ({ name, value, onChange, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleOnChange = React.useCallback((day: any) => {
    helpers.setValue(day.dateString);
  }, []);

  return (
    <View>
      <DatepickerBox value={field.value} onChange={handleOnChange} {...props} />
      {meta.touched && meta.error && <Text>{meta.error}</Text>}
    </View>
  );
};

export default React.memo(FormikDatePicker);
