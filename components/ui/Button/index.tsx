import React from "react";
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import Loader from "../Loader";

interface ButtonProps {
    onPress?: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    children: React.ReactNode;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    onPress,
    buttonStyle,
    disabled = false,
    children,
    isLoading = false,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                buttonStyle,
                disabled && styles.disabledButton,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {isLoading ? <Loader size="small" /> : children}
        </TouchableOpacity>
    );
};

export default React.memo(Button);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        width: "100%",
    },
    disabledButton: {
        backgroundColor: "#cccccc",
    },
});
