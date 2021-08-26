import React from 'react';
import { Text,View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Rotas />
    </NavigationContainer>
  );
}

/*
<NavigationContainer>
            <Rotas/>
        </NavigationContainer>
<View>
  <Text>asdsadsad</Text>
</View>
*/