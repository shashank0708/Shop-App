import React from 'react'
import { View, Image, StyleSheet, Platform } from "react-native";
import Colors from '../../constants/Colors';

import Text from '../tool/Text'


import IconButton from '../tool/IconButton'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const ProductItem = ({imageUrl, price, title, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableNativeFeedback onPress={onPress}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                </TouchableNativeFeedback>
            </View>

            <View style={{ ...styles.row, ...styles.infoRow }}>

                <IconButton onPress={onPress} ios={'ios-information-circle-outline'} android={'md-information-circle-outline'} size={23} color={'#fff'} />

                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.text}>{title}</Text>
                    <Text numberOfLines={1} style={styles.text}>$ {price.toFixed(2)}</Text>
                </View>

                <IconButton ios={'ios-cart'} android={'md-cart'} size={23} color={'#fff'} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
    },
    infoRow: {
        justifyContent: 'space-evenly',
        height: 30,
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 17,
        color: "white",

    },
    row: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: Colors.Primary,
        borderRadius: 30
    },
    image: {
        width: '100%',
        height: 240
    },
    imageContainer: {
        borderRadius: 30,
        overflow: 'hidden',
        elevation: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8

    }
})

export default ProductItem