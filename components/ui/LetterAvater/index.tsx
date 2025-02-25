import React from 'react';
import { Text, View } from 'react-native';

interface LetterAvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

const LetterAvatar: React.FC<LetterAvatarProps> = ({ name, size, backgroundColor, textColor }) => {
  // Function to get initials from the name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  // Function to generate a random color if none is provided
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const avatarSize = size || '100%';
  const avatarBackgroundColor = backgroundColor || getRandomColor();
  const avatarTextColor = textColor || '#FFFFFF';
  const initials = getInitials(name);

  return (
    <View
      className="justify-center items-center"
      style={{
        width: avatarSize,
        height: avatarSize,
        backgroundColor: avatarBackgroundColor,
      }}
    >
      <Text className="font-inter-semibold font-semibold text-3xl text-white">{initials}</Text>
    </View>
  );
};

export default React.memo(LetterAvatar);
