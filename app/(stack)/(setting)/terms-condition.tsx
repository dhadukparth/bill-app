import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const TermsConditionScreen = () => {
  const termsConditionList = [
    {
      title: '',
      description:
        'Welcome to our application. By accessing or using our services, you agree to be bound by these terms and conditions. Please read them carefully before proceeding.',
    },
    {
      title: '1. Account Terms',
      description:
        'You must be 13 years or older to use this Service. You must provide accurate, complete, and current information for your account.  are responsible for maintaining the security of your account and password.',
    },
    {
      title: '2. Privacy Policy',
      description:
        'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Service, you agree to our data practices as described in the Privacy Policy.',
    },
    {
      title: '3. User Guidelines',
      description:
        'You agree not to misuse our services or help anyone else do so. You agree not to: (a) use our service for any illegal purpose, (b) violate any regulations, policies or guidelines, (c) interfere with the operation of our services.',
    },
    {
      title: '4. Content Rights',
      description:
        'The Service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
    },
    {
      title: '5. Termination',
      description:
        'We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.',
    },
    {
      title: '6. Limitation of Liability',
      description:
        'In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.',
    },
    {
      title: '7. Changes to Terms',
      description:
        'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
    },
    {
      title: '8. Contact Information',
      description:
        'If you have any questions about these Terms, please contact us at support@example.com',
    },
  ];

  return (
    <ScrollView>
      <Container>
        <View className="pt-10 p-4">
          <BackWithTitle title="Terms & Conditions" onBackClick={() => router.push('/setting')} />

          <View className="my-4">
            <Title>Last Updated: December 15, 2023</Title>
          </View>
          <View>
            {termsConditionList.map((item, index) => (
              <View key={index} className="mb-4">
                {item.title ? (
                  <View>
                    <Title size="large" fonts="inter-medium">
                      {item.title}
                    </Title>
                  </View>
                ) : null}
                <View className="mt-1">
                  <Title size="small" className="">
                    {item.description}
                  </Title>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default TermsConditionScreen;
