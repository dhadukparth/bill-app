import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text, TextProps } from 'react-native';

const textVariants = cva('text-gray-950 dark:text-white', {
  variants: {
    size: {
      default: 'text-base',
      small: 'text-sm',
      large: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    fonts: {
      'inter-regular': 'font-inter-regular font-normal',
      'inter-medium': 'font-inter-medium font-medium',
      'inter-semibold': 'font-inter-semibold font-semibold',
      'inter-bold': 'font-inter-bold font-semibold',
      'poppins-regular': 'font-poppins-regular font-normal',
      'poppins-medium': 'font-poppins-medium font-medium',
      'poppins-semibold': 'font-poppins-semibold font-semibold',
      'poppins-bold': 'font-poppins-bold font-semibold',
    },
  },
  defaultVariants: {
    size: 'default',
    fonts: 'poppins-regular',
  },
});

interface TitleProps extends TextProps, VariantProps<typeof textVariants> {
  children: string;
}

export const Title = React.forwardRef<Text, TitleProps>(
  ({ children, fonts, size, className, ...props }, ref) => {
    return (
      <Text ref={ref} className={cn(textVariants({ fonts, size, className }))} {...props}>
        {children}
      </Text>
    );
  }
);
