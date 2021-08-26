import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './pages/Login/index';
import TabBar from './routes/bottomTabs.routes';

const Stack = createNativeStackNavigator();

export default function (){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={TelaLogin}  options={{ headerShown:false }}  />
            <Stack.Screen name='Home' component={TabBar}   options={{ headerShown:false }} />
        </Stack.Navigator>
    );
}