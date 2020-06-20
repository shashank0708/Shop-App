import React from 'react'
import {FlatList, Text, StyleSheet} from 'react-native'

import { useSelector } from "react-redux";

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)

    return (
        <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>}/>
    )
}

export default ProductsOverviewScreen