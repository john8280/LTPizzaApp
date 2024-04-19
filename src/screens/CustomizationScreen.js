import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CustomizationScreenContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const CustomizationOption = styled.View`
  margin-bottom: 10px;
`;

const CustomizationScreen = ({ navigation, route }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const pizza = route.params?.pizza;

  const toggleTopping = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <CustomizationScreenContainer>
      <Text>Customization Screen</Text>
      <Text>Pizza: {pizza.name}</Text>
      <Text>Size: {pizza.size}</Text>
      <Text>Toppings:</Text>
      {pizza.toppings.map((topping, index) => (
        <CustomizationOption key={index}>
          <Button
            title={selectedToppings.includes(topping) ? `Remove ${topping}` : `Add ${topping}`}
            onPress={() => toggleTopping(topping)}
          />
        </CustomizationOption>
      ))}
      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate('Checkout', { pizza, selectedToppings })}
      />
    </CustomizationScreenContainer>
  );
};

export default CustomizationScreen;
