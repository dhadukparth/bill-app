import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { View, ViewProps } from 'react-native';
import * as Yup from 'yup';
import Button from '../ui/Button';

interface FormikWrapperProps<T> extends ViewProps {
  children: React.ReactNode;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<any> | null;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  onCurrentValues?: (values: T) => void;
  customValidate?: (values: T) => Partial<Record<keyof T, string>>;
  submitBtn: {
    title: string;
    loading: boolean;
    className?: string;
    icon?: React.ReactNode;
    iconDirection?: 'left' | 'right';
  };
}

const FormikWrapper: React.FC<FormikWrapperProps<any>> = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  style,
  submitBtn = {
    title: 'submit',
    loading: false,
    className: '',
    iconDirection: 'left',
  },
  customValidate,
  onCurrentValues,
  ...props
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validate={customValidate}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit }) => {
        onCurrentValues && onCurrentValues(values);
        return (
          <>
            <View style={style} {...props}>
              {children}
            </View>
            <Button
              onPress={() => handleSubmit()}
              isLoading={submitBtn.loading}
              className={submitBtn?.className}
              icon={submitBtn?.icon}
              iconDirection={submitBtn?.iconDirection}
            >
              {submitBtn.title}
            </Button>
          </>
        );
      }}
    </Formik>
  );
};

export default FormikWrapper;
