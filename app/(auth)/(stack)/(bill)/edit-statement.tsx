import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const EditStatementScreen = () => {
  return (
    <Container>
      <View className="pt-8 p-4">
        <BackWithTitle title="Edit Bill" onBackClick={() => router.push('/bills')} />
      </View>
    </Container>
  );
};

export default EditStatementScreen;
