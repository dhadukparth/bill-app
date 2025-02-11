import { cn } from '@/utils';
import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Loader from '../Loader';

export interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
  varient?: 'outline' | 'default' | 'danger';
}

const Button = forwardRef<any, ButtonProps>(
  (
    { children, isLoading, className, icon, iconDirection = 'left', varient = 'default', ...props },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          'relative flex items-center justify-center rounded-md text-sm bg-blue-500 text-white font-medium transition-colors disabled:opacity-50 px-4 py-3',
          {
            'bg-transparent border dark:border-white border-gray-950': varient === 'outline',
            'bg-red-500 border dark:border-red-500 border-red-500': varient === 'danger',
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader size="small" />
        ) : (
          <View className="flex flex-row justify-center items-center gap-2">
            {icon && iconDirection === 'left' ? icon : null}
            <Text className="text-white font-semibold text-lg font-inter-semibold">{children}</Text>
            {icon && iconDirection === 'right' ? icon : null}
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

export default React.memo(Button);
