import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

interface OtpInputProps {
  onChange: (value: string | number) => void;
  otpLength?: number;
}

const OtpInput: React.FC<OtpInputProps> = ({ onChange, otpLength = 4 }) => {
  const [otp, setOtp] = useState(() => Array(otpLength).fill(''));

  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      const joinValue = newOtp.join('');
      onChange(joinValue);

      if (text && index < otpLength - 1) {
        const nextInput = `otpInput-${index + 1}`;
        (global as any)[nextInput]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        const prevInput = `otpInput-${index - 1}`;
        (global as any)[prevInput]?.focus();
      }

      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  return (
    <View className="flex flex-row justify-between items-center">
      {otp.map((_, index) => (
        <TextInput
          key={index}
          keyboardType="numeric"
          maxLength={1}
          value={otp[index]}
          className="bg-gray-800 max-h-12 text-center w-14 py-3 px-4 text-white dark:placeholder:text-gray-300 text-base font-inter-regular font-normal rounded-lg border border-white"
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(input) => ((global as any)[`otpInput-${index}`] = input)}
        />
      ))}
    </View>
  );
};

export default React.memo(OtpInput);
