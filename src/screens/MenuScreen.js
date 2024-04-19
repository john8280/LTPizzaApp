import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import PizzaItem from '../components/PizzaItem';

const MenuScreenContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const PizzaList = [
  {
    id: '1',
    name: 'Cheese Pizza',
    size: 'Medium',
    toppings: ['Cheese'],
    price: 9.99,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    size: 'Medium',
    toppings: ['Cheese', 'Pepperoni'],
    price: 11.99,
  },
  {
    id: '3',
    name: 'Supreme Pizza',
    size: 'Large',
    toppings: ['Cheese', 'Pepperoni', 'Sausage', 'Mushrooms', 'Bell Peppers', 'Onions', 'Olives'],
    price: 15.99,
  },
  // Add more pizza items as needed
];

const MenuScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <PizzaItem
      pizza={item}
      onPress={() => navigation.navigate('Customization', { pizza: item })}
    />
  );

  return (
    <MenuScreenContainer>
      <Text>Pizza Menu</Text>
      <FlatList
        data={PizzaList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Customization', { pizza: PizzaList[0] })}>
        <Text>View Customization Screen (for demo)</Text>
      </TouchableOpacity>
    </MenuScreenContainer>
  );
};

export default MenuScreen;
