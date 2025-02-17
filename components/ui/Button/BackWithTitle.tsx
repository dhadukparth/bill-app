import { useGlobalStore } from '@/store/global';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Title } from '../HeadText';

interface BackWithTitleProps {
  title: string;
  onBackClick?: () => void;
  rightIcon?: React.ReactNode;
}

const BackWithTitle: React.FC<BackWithTitleProps> = ({
  onBackClick = () => router.back(),
  title,
  rightIcon,
}) => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  return (
    <View className="mb-4 relative">
      <Pressable onPress={onBackClick} className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <AntDesign name="left" size={globalStyle.icon.size} color={iconColor} />
      </Pressable>
      <Title size="2xl" fonts="inter-semibold" className="text-center w-full">
        {title}
      </Title>
      <View className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

export default React.memo(BackWithTitle);
