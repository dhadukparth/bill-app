import { cn } from "@/utils";
import React, { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Loader from "../Loader";

export interface ButtonProps extends TouchableOpacityProps {
    isLoading?: boolean;
    children: string;
}

const Button = forwardRef<any, ButtonProps>(
    ({ children, isLoading, className, ...props }, ref) => {
        return (
            <TouchableOpacity
                ref={ref}
                className={cn(
                    "flex items-center justify-center rounded-md text-sm bg-blue-500 text-white font-medium transition-colors disabled:opacity-50 px-4 py-3",
                    { className }
                )}
                {...props}
            >
                {isLoading ? (
                    <Loader size="small" />
                ) : (
                    <Text className="text-white font-semibold text-lg font-inter-semibold">
                        {children}
                    </Text>
                )}
            </TouchableOpacity>
        );
    }
);

export default React.memo(Button);
