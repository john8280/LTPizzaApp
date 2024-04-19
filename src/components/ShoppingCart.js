import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import CartItem from '../components/CartItem';

const ShoppingCartContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ShoppingCart = ({ items }) => {
  return (
    <ShoppingCartContainer>
      <Text>Shopping Cart</Text>
      {items.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      {/* Add total price and checkout button */}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
