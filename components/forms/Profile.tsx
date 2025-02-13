import globalStyle from '@/utils/globalStyle';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import FormikInput from '../formik/FormikInput';
import FormikTextarea from '../formik/FormikTextarea';

const ProfileForm = () => {
  const [chooseImageUrl, setChooseImageUrl] = React.useState<string | null>(null);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setChooseImageUrl(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View className="size-32 relative mx-auto mb-10">
        <Image
          source={{
            uri:
              chooseImageUrl ??
              'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
          }}
          alt="not found"
          className="size-full rounded-full"
        />
        <View className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full">
          <Pressable onPress={pickImage}>
            <Entypo name="camera" size={globalStyle.icon.size} color={globalStyle.colors.white} />
          </Pressable>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center">
        <View className="mb-3 w-[48%]">
          <FormikInput
            name="firstName"
            placeholder="FirstName"
            icon={
              <Feather name="user" size={globalStyle.icon.size} color={globalStyle.icon.color} />
            }
          />
        </View>
        <View className="mb-3 w-[48%]">
          <FormikInput
            name="lastName"
            placeholder="LastName"
            icon={
              <Feather name="user" size={globalStyle.icon.size} color={globalStyle.icon.color} />
            }
          />
        </View>
      </View>
      <View className="mb-3">
        <FormikInput
          name="email"
          placeholder="Email"
          icon={
            <Fontisto name="email" size={globalStyle.icon.size} color={globalStyle.icon.color} />
          }
        />
      </View>
      <View className="mb-3">
        <FormikTextarea name="description" placeholder="Description" />
      </View>
    </View>
  );
};

export default React.memo(ProfileForm);
