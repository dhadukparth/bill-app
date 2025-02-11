import { cn } from '@/utils';
import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

export interface InputBoxProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
}

const InputBox = React.forwardRef<TextInput, InputBoxProps>(
  ({ label, icon, iconDirection = 'left', className, keyboardType = 'default', ...props }, ref) => {
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
          {icon && iconDirection === 'left' ? (
            <View className="absolute top-1/2 left-6 -translate-y-1/2 -translate-x-1/2 z-10">
              {icon}
            </View>
          ) : null}
          <TextInput
            ref={ref}
            keyboardType={keyboardType}
            autoComplete="off"
            className={cn(
              'bg-gray-800 max-h-12 py-3 px-4 text-white dark:placeholder:text-gray-300 text-base font-inter-regular font-normal rounded-lg border border-white',
              {
                'pl-12': icon && iconDirection === 'left',
                'pr-12': icon && iconDirection === 'right',
              },
              className
            )}
            {...props}
          />
          {icon && iconDirection === 'right' ? (
            <View className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 z-10">
              {icon}
            </View>
          ) : null}
        </View>
      </View>
    );
  }
);

export default React.memo(InputBox);
