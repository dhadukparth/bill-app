import { Title } from '@/components/ui/HeadText';
import { useGlobalStore } from '@/store/global';
import { cn, conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

const PeopleSection = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);

  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const [extendPeople, setExtendPeople] = React.useState(false);
  const [pepolesList, setPepolesList] = React.useState([]);

  if (!pepolesList?.length) {
    return null;
  }

  return (
    <View>
      <Title size="xl" fonts="poppins-semibold">
        People
      </Title>
      <View className="flex flex-row flex-wrap gap-4 mt-4">
        {pepolesList.slice(0, extendPeople ? -1 : 7)?.map((item: any, index) => (
          <PeopleCard
            key={index}
            firstName={item?.firstName}
            lastName={item?.lastName}
            onPress={() => {
              router.push({
                pathname: '/statement-list',
                params: item,
              });
            }}
          />
        ))}
        {pepolesList?.length < 8 ? (
          <PeopleCard
            firstName="More"
            lastName=""
            onPress={() => setExtendPeople(!extendPeople)}
            icon={
              <View className="bg-gray-200 dark:bg-gray-800 size-full flex justify-center items-center">
                <AntDesign
                  name="down"
                  size={globalStyle.icon.size + 10}
                  color={iconColor}
                  className={cn({
                    'rotate-[180deg]': extendPeople,
                  })}
                />
              </View>
            }
          />
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(PeopleSection);

const PeopleCard = ({
  onPress,
  image = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
  firstName,
  lastName,
  icon,
}: {
  firstName: string;
  lastName: string;
  image?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View className="flex flex-col justify-center items-center gap-2">
        <View
          className="size-20 rounded-full overflow-hidden"
          style={{
            maxWidth: 80,
            maxHeight: 80,
          }}
        >
          {icon ? (
            icon
          ) : (
            <Image
              source={{
                uri: image,
              }}
              alt="not found"
              className="size-full rounded-full"
            />
          )}
        </View>
        <Title className="w-20 line-clamp-1 text-center">{`${firstName} ${lastName}`}</Title>
      </View>
    </Pressable>
  );
};
