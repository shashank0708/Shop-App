import React, { useLayoutEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/tool/HeaderButton'

import OrderItem from '../../components/shop/OrderItem'

const OrdersScreen = ({ navigation }) => {
    const orders = useSelector(state => state.orders.orders)

    const renderOrderItem = ({ item }) => {
        return (<OrderItem navigation={navigation} orderItem={item} />)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                        onPress={() => {
                            navigation.openDrawer()
                        }} />
                </HeaderButtons>
            )
        });
    })

    return (

        <View>
            <FlatList data={orders} renderItem={renderOrderItem} />
        </View>
    )
}

export default OrdersScreen