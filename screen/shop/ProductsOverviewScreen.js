import React, { useLayoutEffect } from 'react'
import { FlatList, Text, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/tool/HeaderButton'

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

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                        onPress={() => {
                            // Open Menu
                        }} />
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Cart"
                        iconName={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
                        onPress={() => {
                            navigation.navigate('Cart')
                        }} />
                </HeaderButtons>
            )
        });
    })

    return (
        <FlatList data={products} renderItem={renderProductItem} />
    )
}

export default ProductsOverviewScreen