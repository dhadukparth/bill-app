import BillMenuSection from '@/components/screen/Bill/BillMenuSection';
import PeopleSection from '@/components/screen/Bill/PeopleSection';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import React from 'react';
import { View } from 'react-native';

const BillScreen = () => {
  return (
    <Container>
      <View className="py-4">
        <Title size="3xl" fonts="inter-bold">
          Bills
        </Title>

        <BillMenuSection />

        {/* Pepoles */}
        <PeopleSection />
      </View>
    </Container>
  );
};

export default BillScreen;
