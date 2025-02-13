import { cn } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

export interface PasswordInputBoxProps extends TextInputProps {
  label?: string;
  icon?: React.ReactNode;
}

const PasswordBox = React.forwardRef<TextInput, PasswordInputBoxProps>(
  ({ label, icon, className, keyboardType = 'default', ...props }, ref) => {
    const [passwordHide, setPasswordHide] = React.useState(true);

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
          {icon ? (
            <View className="absolute top-1/2 left-6 -translate-y-1/2 -translate-x-1/2 z-10">
              {icon}
            </View>
          ) : null}
          <TextInput
            ref={ref}
            keyboardType={keyboardType}
            secureTextEntry={passwordHide}
            autoComplete="off"
            className={cn(
              'bg-gray-100 dark:bg-gray-800 max-h-12 py-3 px-4 text-white dark:placeholder:text-gray-300 text-base font-inter-regular font-normal rounded-lg border border-white',
              {
                'pl-12': icon,
              },
              className
            )}
            {...props}
          />
          <View className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 z-10">
            <TouchableOpacity onPress={() => setPasswordHide(!passwordHide)}>
              <Feather
                name={passwordHide ? 'eye' : 'eye-off'}
                size={globalStyle.icon.size}
                color={globalStyle.colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
);

export default React.memo(PasswordBox);
