import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CheckoutScreenContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const OrderSummaryContainer = styled.View`
  margin-bottom: 20px;
`;

const CheckoutScreen = ({ navigation, route }) => {
  const { pizza, selectedToppings } = route.params;

  return (
    <CheckoutScreenContainer>
      <Text>Checkout Screen</Text>
      <OrderSummaryContainer>
        <Text>Selected Pizza:</Text>
        <Text>Name: {pizza.name}</Text>
        <Text>Size: {pizza.size}</Text>
        <Text>Toppings: {selectedToppings.join(', ')}</Text>
        <Text>Price: ${pizza.price}</Text>
      </OrderSummaryContainer>
      <Button
        title="Place Order"
        color="#00FF00"
        onPress={() => {
          // Logic to place order
          navigation.navigate('OrderConfirmation');
        }}
      />
    </CheckoutScreenContainer>
  );
};

export default CheckoutScreen;
