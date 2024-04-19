import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const PizzaItemContainer = styled.View`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const PizzaItem = ({ pizza, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <PizzaItemContainer>
        <Text>{pizza.name}</Text>
        <Text>Size: {pizza.size}</Text>
        <Text>Toppings: {pizza.toppings.join(', ')}</Text>
        <Text>Price: ${pizza.price}</Text>
      </PizzaItemContainer>
    </TouchableOpacity>
  );
};

export default PizzaItem;
