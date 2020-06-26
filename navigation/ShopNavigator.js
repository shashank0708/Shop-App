import React from 'react'
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import ProductOverviewScreen from "../screen/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screen/shop/ProductDetailScreen";
import CartScreen from "../screen/shop/CartScreen";
import OrdersScreen from '../screen/shop/OrdersScreen';
import OrderScreen from '../screen/shop/OrderScreen';

import Colors from '../constants/Colors'

const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: Colors.Primary,
    },
    headerTintColor: 'white',
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
            <ProductsStack.Screen name='Cart' component={CartScreen} />
        </ProductsStack.Navigator>
    )
}

const OrdersStack = createStackNavigator()

const OrdersNavigator = () => {
    return (
        <OrdersStack.Navigator
            screenOptions={defaultScreenOptions}>
            <OrdersStack.Screen name='Orders' component={OrdersScreen} options={{ title: 'Orders' }} />
            <OrdersStack.Screen name='Order' component={OrderScreen} options={{ title: 'Orders' }} />
        </OrdersStack.Navigator>
    )
}

const Drawer = createDrawerNavigator()




const Main = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={
                    {
                        activeTintColor: Colors.Primary,
                        labelStyle: {
                            fontSize: 16,
                            fontWeight: 'bold'
                        }
                    }
                }>

                <Drawer.Screen name={'Shop'} component={ProductNavigator} options={{ title: 'Shop' }} />
                <Drawer.Screen name={'Orders'} component={OrdersNavigator} options={{ title: 'Orders' }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Main

