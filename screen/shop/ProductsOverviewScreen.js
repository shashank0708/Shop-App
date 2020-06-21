import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import { useSelector, useDispatch } from "react-redux";

import ProductItem from '../../components/shop/ProductItem'
import * as cartAction from '../../store/actions/cart'


const ProductsOverviewScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.availableProducts)

    const addToCartHandler = product => {
        dispatch(cartAction.addToCart(product))
    }
    const itemPressHandler = ({ item, index }) => {
        navigation.navigate('ProductDetail', { item, index })
    }

    const renderProductItem = itemData => {
        const { item } = itemData

        return (
            <ProductItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onPress={itemPressHandler.bind(this, itemData)}
                onAddToCart={addToCartHandler.bind(this, item)}

            />
        )
    }

    return (
        <FlatList data={products} renderItem={renderProductItem} />
    )
}

export default ProductsOverviewScreen