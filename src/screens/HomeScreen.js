import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to LTP Pizza Shop!</Text>
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}
