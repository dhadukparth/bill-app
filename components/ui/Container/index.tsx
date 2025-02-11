import CStatusBar from '@/components/common/StatusBar';
import { cn } from '@/utils';
import React from 'react';
import { View, ViewProps } from 'react-native';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<View, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <>
        <CStatusBar />
        <View
          ref={ref}
          className={cn('px-4 pt-10 h-full flex-1 bg-whit dark:bg-gray-950', className)}
          {...props}
        >
          {children}
        </View>
      </>
    );
  }
);

export default React.memo(Container);
