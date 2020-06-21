import React from 'react'
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductOverviewScreen from "../screen/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screen/shop/ProductDetailScreen";

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Colors from '../constants/Colors'

const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTintColor: Colors.Primary,
    headerTitleStyle: {
        fontFamily: 'proxima-nova-bold'
    }
}

const ProductsStack = createStackNavigator()

const ProductNavigator = () => {
    return (
        <ProductsStack.Navigator
            screenOptions={defaultScreenOptions}>
            <ProductsStack.Screen name='ProductOverview' component={ProductOverviewScreen} options={{ title: 'Shop' }} />
            <ProductsStack.Screen name='ProductDetail' component={ProductDetailScreen} />
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

