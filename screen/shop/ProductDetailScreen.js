import React from 'react'
import { Platform, StyleSheet, View, Image, Butto, TouchableNativeFeedback, Button } from 'react-native';

import BoldText from '../../components/tool/BoldText'
import Text from '../../components/tool/Text'

import Colors from '../../constants/Colors'

const ProductDetailScreen = ({ navigation, route }) => {
    const { item, index } = route.params
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
                <Button title={"Add to Cart"} color={Colors.Accent} />
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
        width: '100%',
        height: 400,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 30,
        overflow: 'hidden'
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