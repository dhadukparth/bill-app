import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import Loader from '../Loader';

const buttonVariants = cva(
  'relative flex items-center justify-center rounded-md transition-colors disabled:opacity-50 px-4 py-3',
  {
    variants: {
      size: {
        small: 'text-sm font-regular',
        default: 'text-base font-medium',
        large: 'text-lg font-semibold',
      },
      varient: {
        default: 'bg-blue-500 text-white',
        outline:
          'bg-transparent border dark:border-white border-gray-950 text-black dark:text-white',
        danger: 'bg-red-500 border dark:border-red-500 border-red-500 text-black dark:text-white',
      },
    },
    defaultVariants: {
      size: 'default',
      varient: 'default',
    },
  }
);

export interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: string;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
}

const Button = forwardRef<any, ButtonProps>(
  (
    {
      children,
      isLoading,
      className,
      size,
      icon,
      iconDirection = 'left',
      varient = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <Pressable ref={ref} className={cn(buttonVariants({ size, varient, className }))} {...props}>
        {isLoading ? (
          <Loader size="small" />
        ) : (
          <View className="flex flex-row justify-center items-center gap-2">
            {icon && iconDirection === 'left' ? icon : null}
            <Text className="text-white font-semibold text-lg font-inter-semibold">{children}</Text>
            {icon && iconDirection === 'right' ? icon : null}
          </View>
        )}
      </Pressable>
    );
  }
);

export default React.memo(Button);
