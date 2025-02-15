import globalStyle from '@/utils/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Animated, Pressable, View } from 'react-native';

type buttonListType = {
  name: string;
  icon: React.ReactNode;
  onPress?: () => void;
  background?: string;
};

interface FloatingButtonProps {
  buttonList: buttonListType[];
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ buttonList }) => {
  const btnSize = 35;
  const btnDistance = 60;

  const [pop, setPop] = React.useState(false);
  const animatedValues = React.useRef(buttonList.map(() => new Animated.Value(btnSize))).current;

  React.useEffect(() => {
    if (pop) {
      animatedValues.forEach((anim, index) => {
        Animated.timing(anim, {
          toValue: btnSize + (index + 1) * btnDistance,
          duration: 500,
          useNativeDriver: false,
        }).start();
      });
    } else {
      animatedValues.forEach((anim) => {
        Animated.timing(anim, {
          toValue: btnSize,
          duration: 500,
          useNativeDriver: false,
        }).start();
      });
    }
  }, [pop]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {buttonList.map((item, index) => (
        <Animated.View
          key={index}
          className="bg-red-500 size-14 rounded-full absolute bottom-16 right-4 flex justify-center items-center"
          style={{ bottom: animatedValues[index] }}
        >
          <Pressable onPress={item.onPress}>{item.icon}</Pressable>
        </Animated.View>
      ))}
      <Pressable
        className="bg-blue-500 size-14 rounded-full absolute bottom-10 right-4 flex justify-center items-center"
        onPress={() => setPop(!pop)}
      >
        <AntDesign
          name={pop ? 'close' : 'plus'}
          size={globalStyle.icon.size}
          color={globalStyle.colors.white}
        />
      </Pressable>
    </View>
  );
};

export default FloatingButton;
