import React, { useLayoutEffect, useState } from 'react'
import { FlatList, View, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/tool/HeaderButton'

import Toast from 'react-native-simple-toast'


import { useSelector, useDispatch } from "react-redux";


import ProductItem from '../../components/shop/ProductItem'
import * as cartAction from '../../store/actions/cart'

const showMessage = message => {
    Toast.show(message)
}


const ProductsOverviewScreen = ({ navigation }) => {
    const [showMenu, setShowMenu] = useState(false)

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.availableProducts)

    const addToCartHandler = product => {
        dispatch(cartAction.addToCart(product))
        showMessage('Item added to cart!')
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
                            navigation.openDrawer()
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
        <View>
            <FlatList data={products} renderItem={renderProductItem} />
        </View>
    )
}

export default ProductsOverviewScreen