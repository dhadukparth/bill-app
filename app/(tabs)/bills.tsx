import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import React from 'react';
import { ScrollView, View } from 'react-native';

const BillScreen = () => {
  return (
    <ScrollView className="bg-white dark:bg-gray-950">
      <Container>
        <View>
          <Title size="3xl">BillScreen</Title>
        </View>
      </Container>
    </ScrollView>
  );
};

export default BillScreen;
