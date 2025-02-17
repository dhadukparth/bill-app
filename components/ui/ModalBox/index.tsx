import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { Modal, ModalProps, View } from 'react-native';

const modalVariants = cva('', {
  variants: {
    aligment: {
      top: '',
      center: '',
      bottom: '',
    },
  },
  defaultVariants: {
    aligment: 'center',
  },
});

interface ModalBoxProps extends ModalProps, VariantProps<typeof modalVariants> {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
}

const ModalBox = React.forwardRef<Modal, ModalBoxProps>(
  ({ children, open, close, aligment, ...props }, ref) => {
    return (
      <Modal
        ref={ref}
        transparent={true}
        animationType="slide"
        visible={open}
        onRequestClose={close}
        className="bg-transparent"
        {...props}
      >
        <View className="flex justify-center items-center w-[90%] mx-auto h-full">{children}</View>
      </Modal>
    );
  }
);

export default React.memo(ModalBox);
