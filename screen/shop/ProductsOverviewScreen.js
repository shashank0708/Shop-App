import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import { useSelector } from "react-redux";

import ProductItem from '../../components/shop/ProductItem'


const ProductsOverviewScreen = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)

    const itemPressHandler = ({ item, index }) => {
        navigation.navigate('ProductDetail', { item, index })
    }

    const renderProductItem = itemData => {
        const { item } = itemData

        return (
            <ProductItem
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onPress={itemPressHandler.bind(this, itemData)}
            />
        )
    }

    return (
        <FlatList data={products} renderItem={renderProductItem} />
    )
}

export default ProductsOverviewScreen