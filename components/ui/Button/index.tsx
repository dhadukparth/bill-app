import { cn } from '@/utils';
import globalStyle from '@/utils/globalStyle';
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
        default: 'bg-blue-500',
        outline: 'bg-transparent border dark:border-white border-gray-950',
        danger: 'bg-red-500 border dark:border-red-500 border-red-500',
        ghost: 'bg-transparent',
        'danger-outline': 'bg-transparent border dark:border-red-500 border-red-600',
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
  loaderColor?: string;
  titleClassName?: string;
  iconDirection?: 'left' | 'right';
}

const Button = forwardRef<any, ButtonProps>(
  (
    {
      children,
      isLoading,
      className,
      titleClassName,
      size,
      icon,
      loaderColor = globalStyle.colors.white,
      iconDirection = 'left',
      varient = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <Pressable ref={ref} className={cn(buttonVariants({ size, varient, className }))} {...props}>
        {isLoading ? (
          <Loader size="small" color={loaderColor} />
        ) : (
          <View className="flex flex-row justify-center items-center gap-2">
            {icon && iconDirection === 'left' ? icon : null}
            <Text
              className={cn(
                'font-semibold text-lg font-inter-semibold ',
                {
                  'text-black dark:text-white': varient === 'outline',
                  'text-red-500': varient === 'danger-outline',
                  'text-white ': ['danger', 'default'].includes(varient ?? ''),
                },
                titleClassName
              )}
            >
              {children}
            </Text>
            {icon && iconDirection === 'right' ? icon : null}
          </View>
        )}
      </Pressable>
    );
  }
);

export default React.memo(Button);
