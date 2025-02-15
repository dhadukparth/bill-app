import React from 'react';
import { Animated, ScrollView, StyleProp, View, ViewStyle } from 'react-native';

interface StickyTopHeaderProps {
  children: React.ReactNode;
  headerChildren: React.ReactNode;
  stickyStartHeight?: number;
  stickyHeaderStyle?: StyleProp<ViewStyle>;
}

const StickyTopHeader: React.FC<StickyTopHeaderProps> = ({
  children,
  headerChildren,
  stickyStartHeight = 400,
  stickyHeaderStyle,
}) => {
  const headerSectionHeight = stickyStartHeight;

  const scrollY = new Animated.Value(0);

  const stickyTop = scrollY.interpolate({
    outputRange: [-100, 0],
    inputRange: [headerSectionHeight, headerSectionHeight + 150],
    extrapolate: 'clamp',
  });

  const stickyOpacity = scrollY.interpolate({
    outputRange: [0, 1],
    inputRange: [headerSectionHeight, headerSectionHeight + 10],
    extrapolate: 'clamp',
  });

  return (
    <View className="flex-1">
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        className="bg-white dark:bg-gray-950"
      >
        {children}
      </ScrollView>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: -150, // -150 -> 0
            left: 0,
            right: 0,
            opacity: 1,
          },
          {
            top: stickyTop,
            opacity: stickyOpacity,
          },
          stickyHeaderStyle,
        ]}
      >
        {headerChildren}
      </Animated.View>
    </View>
  );
};

export default StickyTopHeader;
