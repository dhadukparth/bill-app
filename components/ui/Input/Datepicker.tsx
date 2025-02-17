import React from 'react';
import { Pressable, View } from 'react-native';
import { CalendarProps } from 'react-native-calendars';
import Button from '../Button';
import CalendarBox from '../CalendarBox';
import ModalBox from '../ModalBox';
import InputBox from './InputBox';

export interface DatepickerBoxProps extends CalendarProps {
  icon?: React.ReactNode;
  value?: string;
  onChange?: (date: any) => void;
  placeholder?: string;
}

const DatepickerBox: React.FC<DatepickerBoxProps> = ({
  icon,
  value = '',
  onChange = () => {},
  placeholder = 'Select date',
  ...props
}) => {
  const [calendarModal, setCalendarModal] = React.useState(false);

  const handleOpenDatePicker = () => {
    setCalendarModal(true);
  };

  const handleCloseModal = () => {
    setCalendarModal(false);
  };

  const handleChangeModal = () => {
    setCalendarModal(false);
  };

  return (
    <View>
      <Pressable onPress={handleOpenDatePicker}>
        <InputBox icon={icon} value={value} placeholder={placeholder} readOnly />
      </Pressable>
      <ModalBox open={calendarModal} close={handleCloseModal}>
        <View className="bg-white p-4 rounded-lg w-full">
          <CalendarBox onChange={onChange} selected={value} {...props} />
          <View className="flex flex-row justify-end items-center">
            <Button varient="ghost" onPress={handleCloseModal}>
              Cancel
            </Button>
            <Button varient="ghost" onPress={handleChangeModal}>
              Ok
            </Button>
          </View>
        </View>
      </ModalBox>
    </View>
  );
};

export default React.memo(DatepickerBox);
