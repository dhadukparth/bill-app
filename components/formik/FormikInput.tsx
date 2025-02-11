import { useField } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import InputBox, { InputBoxProps } from '../ui/Input/InputBox';

interface FormikInputProps extends InputBoxProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
}

const FormikInput = React.forwardRef<TextInput, FormikInputProps>(
  ({ name, label, placeholder, disabled, readonly, ...props }, ref) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = (text: string) => {
      helpers.setValue(text);
    };

    return (
      <View>
        <InputBox
          ref={ref}
          label={label}
          value={field.value}
          placeholder={placeholder}
          autoComplete="off"
          onChangeText={handleOnChange}
          onBlur={() => helpers.setTouched(true)}
          editable={!disabled && !readonly}
          {...props}
        />
        {meta.touched && meta.error && <Text>{meta.error}</Text>}
      </View>
    );
  }
);

export default React.memo(FormikInput);
