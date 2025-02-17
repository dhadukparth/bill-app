import { useField } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputBoxProps } from '../ui/Input/InputBox';
import PasswordBox from '../ui/Input/PasswordBox';

interface FormikPasswordInputProps extends InputBoxProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
}

const FormikPasswordInput = React.forwardRef<TextInput, FormikPasswordInputProps>(
  ({ name, label, placeholder, disabled, readonly, ...props }, ref) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = React.useCallback((text: string) => {
      helpers.setValue(text);
    }, []);

    return (
      <View>
        <PasswordBox
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

export default React.memo(FormikPasswordInput);
