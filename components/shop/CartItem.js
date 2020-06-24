import React from 'react'
import { View, Image, StyleSheet, Platform } from "react-native";
import Colors from '../../constants/Colors';

import Text from '../tool/Text'
import BoldText from '../tool/BoldText'
import QuantityController from './QuantityController'
import { useSelector } from 'react-redux';

const CartItem = ({ onValueChange, cartItem }) => {

    const products = useSelector(
        state =>
            state.products.availableProducts)

    const product = products[products.findIndex(x => x.id == cartItem.productId)]

    const valueChangeHandler = (action) => {
        onValueChange(action, product)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: cartItem.imageUrl }} />
            </View>
            <View style={styles.infoContainer}>
                <BoldText numberOfLines={1} style={styles.title}>{cartItem.productTitle}</BoldText>
                <Text>Per product: $ {cartItem.productPrice.toFixed()}</Text>
                <Text>Total : $ {cartItem.sum.toFixed(2)}</Text>
            </View>
            <QuantityController style={styles.quantityController} initialValue={cartItem.quantity} onValueChange={valueChangeHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: Colors.Primary
    },
    container: {
        margin: 10,
        flexDirection: 'row'
    },
    infoContainer: {
        flex: 1,
        margin: 10,
    },
    quantityController: {
        alignSelf: 'center'
    },
    imageContainer: {
        elevation: 5,
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
        maxWidth: 100
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default CartItem