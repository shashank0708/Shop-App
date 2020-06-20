import React from 'react'
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductOverviewScreen from "../screen/shop/ProductsOverviewScreen";

import Colors from '../constants/Colors'

const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.Primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.Primary,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

const ProductsStack = createStackNavigator()

const ProductNavigator = () => {
    return (
        <ProductsStack.Navigator
            screenOptions={defaultScreenOptions}>
            <ProductsStack.Screen name='ProductOverview' component={ProductOverviewScreen} options={{ title: 'Shop' }} />
        </ProductsStack.Navigator>
    )
}

const Main = () => {
    return (
        <NavigationContainer>
            <ProductNavigator>
            </ProductNavigator>
        </NavigationContainer>
    )
}

export default Main

