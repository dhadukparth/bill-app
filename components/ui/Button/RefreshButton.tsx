import globalStyle from '@/utils/globalStyle';
import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Animated, Easing, Pressable } from 'react-native';

const RefreshButton = ({ onClick }: { onClick: () => void }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const refreshStart = () => {
    if (!animationRef.current) {
      rotateAnim.setValue(0);

      animationRef.current = Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );

      animationRef.current.start();

      timeoutRef.current = setTimeout(() => {
        refreshStop();
      }, 1000);
    }
  };

  const refreshStop = () => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null;
      rotateAnim.setValue(0);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Pressable
      className="bg-blue-500 p-2 rounded-lg"
      onPress={() => {
        refreshStart();
        onClick();
      }}
      onLongPress={refreshStop} // Long press to manually stop
    >
      <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
        <Ionicons name="reload" size={globalStyle.icon.size} color={globalStyle.colors.white} />
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(RefreshButton);
