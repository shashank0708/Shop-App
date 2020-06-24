import React, { useLayoutEffect } from 'react'
import { Image, FlatList, View, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { useDispatch, useSelector } from 'react-redux'

import HeaderButton from '../../components/tool/HeaderButton'
import CartItem from '../../components/shop/CartItem'

import * as cartAction from '../../store/actions/cart'


const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const sort = (arr, key) => {
        return arr.sort((a, b) => {
            return ((a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0))
        })
    }

    const cartItems = useSelector(state => {
        const tranformedCartItems = []

        for (const key in state.cart.items) {
            tranformedCartItems.push(state.cart.items[key])
        }
        return tranformedCartItems
    })

    const totalAmount = useSelector(state => state.cart.totalAmount.toFixed(2))
    
    console.log(totalAmount)

    sort(cartItems , 'productId')

    const quantityChangedHandler = (action, product) => {

        if (action === 'ADD') {
            dispatch(cartAction.addToCart(product))
        } else if (action === 'SUB') {
            dispatch(cartAction.removeFromCart(product))
        } else if (action === 'DEL') {
            dispatch(cartAction.deleteFromCart(product))
        }
    }

    const renderCartItem = ({ item }) => {
        return (
            <CartItem onValueChange={quantityChangedHandler} cartItem={item} />
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Buy"
                        iconName={Platform.OS === 'ios' ? 'ios-done-all' : 'md-done-all'}
                        onPress={() => {
                        }} />
                </HeaderButtons>
            )
        });
    })

    return (
        <View>
            <FlatList data={cartItems} renderItem={renderCartItem} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CartScreen