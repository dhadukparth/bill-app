import { cn } from '@/utils';
import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

export interface TextareaBoxProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
}

const TextareaBox = React.forwardRef<TextInput, TextareaBoxProps>(
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
            <View className="absolute top-6 left-6 -translate-y-1/2 -translate-x-1/2 z-10">
              {icon}
            </View>
          ) : null}
          <TextInput
            ref={ref}
            keyboardType={keyboardType}
            autoComplete="off"
            multiline={true}
            numberOfLines={2}
            textAlignVertical="top"
            className={cn(
              'bg-gray-100 dark:bg-gray-800 h-32 py-3 px-4 text-black dark:text-white placeholder:text-gray-800 dark:placeholder:text-gray-300 text-base font-inter-regular font-normal rounded-lg border border-white',
              {
                'pl-12': icon && iconDirection === 'left',
                'pr-12': icon && iconDirection === 'right',
              },
              className
            )}
            {...props}
          />
          {icon && iconDirection === 'right' ? (
            <View className="absolute top-6 right-1 -translate-y-1/2 -translate-x-1/2 z-10">
              {icon}
            </View>
          ) : null}
        </View>
      </View>
    );
  }
);

export default React.memo(TextareaBox);
