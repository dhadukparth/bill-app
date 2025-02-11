import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Title } from '../HeadText';

interface BackWithTitleProps {
  onBackClick: () => void;
  title: string;
}

const BackWithTitle: React.FC<BackWithTitleProps> = ({ onBackClick, title }) => {
  return (
    <View className="mb-4 relative">
      <Pressable onPress={onBackClick} className="absolute left-0 z-10">
        <AntDesign name="left" size={globalStyle.icon.size} color={globalStyle.icon.color} />
      </Pressable>
      <Title size="2xl" fonts="inter-semibold" className="text-center w-full">
        {title}
      </Title>
    </View>
  );
};

export default React.memo(BackWithTitle);
