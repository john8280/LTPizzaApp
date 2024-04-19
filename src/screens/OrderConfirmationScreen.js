import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import LTPizzaLogo from '../../assets/LTPizzaLogo.png';

const OrderConfirmationScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PizzaImage = styled(Animatable.Image)`
  width: 200px;
  height: 200px;
`;

const OrderConfirmationScreen = () => {
  const pizzaRef = useRef(null);

  useEffect(() => {
    if (pizzaRef.current) {
      pizzaRef.current.rotate(360).then(() => {
        // Animation complete
      });
    }
  }, []);

  return (
    <OrderConfirmationScreenContainer>
      <Text>Order Confirmation Screen</Text>
      <PizzaImage
        ref={pizzaRef}
        source={LTPizzaLogo} // Use the imported image directly
      />
      <Text>Estimated time: 20 minutes</Text>
    </OrderConfirmationScreenContainer>
  );
};

export default OrderConfirmationScreen;
