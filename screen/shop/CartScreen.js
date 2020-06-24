import React, { useLayoutEffect } from 'react'
import { Image, FlatList, View, StyleSheet, Platform, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { useDispatch, useSelector } from 'react-redux'

import HeaderButton from '../../components/tool/HeaderButton'
import CartItem from '../../components/shop/CartItem'
import BoldText from '../../components/tool/BoldText'
import Text from '../../components/tool/Text'

import Colors from '../../constants/Colors'

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

    sort(cartItems, 'productId')

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
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList data={cartItems} renderItem={renderCartItem} />
            </View>
            <View style={styles.finalContainer}>
                <BoldText style={styles.bigText}>Total Amount : </BoldText>
                <Text style={styles.totalAmountText}>$ {totalAmount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    totalAmountText:{
        color:Colors.Accent,
        fontSize:17
    },
    bigText: {
        fontSize: 20,
        alignItems: 'center',
        color: 'white',
        marginEnd:10
    },
    container: {
        flex: 1
    },
    listContainer: {
        flex: 1
    },
    finalContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: Colors.Primary,
        elevation: 20,
        padding: 20,
        flexDirection:'row',
        alignItems:'center'
    }
})

export default CartScreen