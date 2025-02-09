import React from "react";
import { View } from "react-native";
import Swiper, { SwiperProps } from "react-native-swiper";

interface SliderProps extends SwiperProps {
    children: React.ReactNode[];
}

const Slider = React.forwardRef<Swiper, SliderProps>((props, ref) => {
    return (
        <Swiper ref={ref} {...props}>
            {props.children.map((child, index) => (
                <View key={index} className="h-full">
                    {child}
                </View>
            ))}
        </Swiper>
    );
});

export default Slider;
