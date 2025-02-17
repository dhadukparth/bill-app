import { useField } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Textarea, { TextareaBoxProps } from '../ui/Input/Textarea';

interface FormikTextareaProps extends TextareaBoxProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
}

const FormikTextarea = React.forwardRef<TextInput, FormikTextareaProps>(
  ({ name, label, placeholder, disabled, readonly, ...props }, ref) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = React.useCallback((text: string) => {
      helpers.setValue(text);
    }, []);

    return (
      <View>
        <Textarea
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

export default React.memo(FormikTextarea);
