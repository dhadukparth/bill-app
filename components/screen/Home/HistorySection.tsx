import { Title } from '@/components/ui/HeadText';
import LetterAvater from '@/components/ui/LetterAvater';
import Loader from '@/components/ui/Loader';
import { createBillWithCustomer } from '@/lib/filesystem/bills';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import React from 'react';
import { Image, View } from 'react-native';

const HistorySection = ({ maxLength }: { maxLength?: number }) => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);

  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const [loading, setLoading] = React.useState(false);
  const [historyList, setHistoryList] = React.useState([]);

  async function fetchAllHistory() {
    try {
      setLoading(true);
      const result = await createBillWithCustomer();
      if (result) {
        setHistoryList(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchAllHistory();
  }, []);

  return (
    <View>
      {loading ? (
        <View className="h-screen flex flex-col justify-center items-center">
          <Loader size="large" color={iconColor} />
        </View>
      ) : (
        <>
          {historyList?.slice(0, maxLength)?.map((item: any, index) => (
            <View
              key={index}
              className="flex flex-row justify-between items-center px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-xl my-2"
            >
              <View className="flex flex-row justify-start items-center gap-3">
                <View className="size-14 rounded-full overflow-hidden">
                  {item?.customer?.image ? (
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      alt="not found"
                      className="size-full rounded-full"
                    />
                  ) : (
                    <LetterAvater name={item?.customer?.firstName ?? ''} />
                  )}
                </View>
                <View>
                  <Title size="large" fonts="inter-semibold">
                    {`${item?.customer?.firstName} ${item?.customer?.lastName}`}
                  </Title>
                  <Title size="default" fonts="poppins-regular">
                    {item?.date}
                  </Title>
                </View>
              </View>
              <View>
                <Title
                  size="large"
                  fonts="inter-bold"
                  style={{
                    color: item?.billType === 'credit' ? 'green' : 'red',
                  }}
                >
                  {`₹ ${item?.amount}`}
                </Title>
              </View>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default React.memo(HistorySection);
