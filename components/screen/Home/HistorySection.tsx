import { Title } from '@/components/ui/HeadText';
import React from 'react';
import { Image, View } from 'react-native';

type recentTransactionsListType = {
  image: string;
  firstName: string;
  lastName: string;
  date: string;
  payment: number;
  paymentType: 'credit' | 'debit';
};

const HistorySection = ({ maxLength }: { maxLength?: number }) => {
  const recentTransactionsList: recentTransactionsListType[] = [
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Cullen',
      lastName: 'Corrado',
      date: '2024-04-20',
      payment: 30000,
      paymentType: 'credit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Welsh',
      lastName: 'Spottiswood',
      date: '2024-04-20',
      payment: 10000,
      paymentType: 'debit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Carce',
      lastName: 'Picheford',
      date: '2024-04-20',
      payment: 2000,
      paymentType: 'credit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Ferdinande',
      lastName: 'Klemmt',
      date: '2024-04-20',
      payment: 500,
      paymentType: 'debit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Ronda',
      lastName: 'Kopman',
      date: '2024-04-20',
      payment: 80,
      paymentType: 'debit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Redd',
      lastName: 'Goldsmith',
      date: '2024-04-20',
      payment: 2340,
      paymentType: 'debit',
    },
    {
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
      firstName: 'Consolata',
      lastName: 'Ludgate',
      date: '2024-04-20',
      payment: 1400,
      paymentType: 'debit',
    },
  ];

  return (
    <View>
      {recentTransactionsList.slice(0, maxLength).map((item, index) => (
        <View
          key={index}
          className="flex flex-row justify-between items-center px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-xl my-2"
        >
          <View className="flex flex-row justify-start items-center gap-3">
            <View className="size-14 rounded-full">
              <Image
                source={{
                  uri: item.image,
                }}
                alt="not found"
                className="size-full rounded-full"
              />
            </View>
            <View>
              <Title size="large" fonts="inter-semibold">
                {`${item.firstName} ${item.lastName}`}
              </Title>
              <Title size="default" fonts="poppins-regular">
                {item.date}
              </Title>
            </View>
          </View>
          <View>
            <Title
              size="large"
              fonts="inter-bold"
              style={{
                color: item.paymentType === 'credit' ? 'green' : 'red',
              }}
            >
              {`₹ ${item.payment}`}
            </Title>
          </View>
        </View>
      ))}
    </View>
  );
};

export default React.memo(HistorySection);
