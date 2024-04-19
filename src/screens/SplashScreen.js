import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const SplashScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SplashScreen = () => {
  return (
    <SplashScreenContainer>
      <Text>Loading...</Text>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
