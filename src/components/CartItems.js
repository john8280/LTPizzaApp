import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const CartItemContainer = styled.View`
  margin-bottom: 10px;
`;

const CartItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CartItemContainer>
        <Text>{item.name} - ${item.price}</Text>
        {/* Add item details here */}
      </CartItemContainer>
    </TouchableOpacity>
  );
};

export default CartItem;
