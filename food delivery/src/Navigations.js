import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderLoading from './screens/OrderLoading';
import DeliveryScreen from './screens/DeliveryScreen';

const Navigations = () => {
    return (
      
            <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Restaurant" component={RestaurantScreen}  />
        <Stack.Screen name='Cart' component={CartScreen} />
        <Stack.Screen name='OrderLoading' component={OrderLoading} />
        <Stack.Screen name='Delivery' component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({})

export default Navigations;
