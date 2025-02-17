import globalStyle from '@/utils/globalStyle';
import React from 'react';
import { Calendar, CalendarProps } from 'react-native-calendars';

interface CalendarBoxProps extends CalendarProps {
  selected: string;
  onChange: (date: any) => void;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({ selected, onChange, ...props }) => {
  return (
    <Calendar
      onDayPress={onChange}
      markedDates={{
        [selected]: {
          selected: true,
          marked: false,
          selectedColor: globalStyle.colors.blue[500],
        },
      }}
      {...props}
    />
  );
};

export default CalendarBox;
