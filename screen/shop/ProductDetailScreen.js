import React from 'react'
import { Platform, StyleSheet, View, Image, Butto, TouchableNativeFeedback, Button } from 'react-native';

import BoldText from '../../components/tool/BoldText'
import Text from '../../components/tool/Text'

import ProductItem from '../../components/shop/ProductItem'
import * as cartAction from '../../store/actions/cart'

import Colors from '../../constants/Colors'
import { useDispatch } from 'react-redux';

const ProductDetailScreen = ({ navigation, route }) => {
    const { item, index } = route.params
    const dispatch = useDispatch()

    const addToCartHandler = product => {
        dispatch(cartAction.addToCart(product))
    }

    navigation.setOptions({ title: item.title })

    return (
        <View style={styles.screen}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <TouchableNativeFeedback>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.descriptionContainer}>
                    <BoldText style={styles.price}>$  {item.price}</BoldText>
                    <BoldText style={styles.title}>Description:</BoldText>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Add to Cart"} color={Colors.Accent} onPress={addToCartHandler.bind(this, item)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.Primary
    },
    contentContainer: {
        flex: 1
    },
    buttonContainer: {
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        margin: 30
    },
    imageContainer: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 20,
        overflow: 'hidden',

    },
    price: {
        color: Colors.Accent,
        fontSize: 21,
        marginBottom: 15,
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginBottom: 5

    },
    description: {
        color: '#ccc',
        fontSize: 17
    },
    descriptionContainer: {
        margin: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ProductDetailScreen