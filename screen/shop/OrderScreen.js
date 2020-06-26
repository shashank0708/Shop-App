import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import CartItem from '../../components/shop/CartItem'
import BoldText from '../../components/tool/BoldText'
import Text from '../../components/tool/Text'
import Colors from '../../constants/Colors'



const OrderScreen = ({ route }) => {
    const { orders } = route.params
    const { totalAmount } = route.params

    const renderOrderItem = ({ item }) => {
        return (
            <CartItem cartItem={item} quantityEditable={false} />
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList data={orders} renderItem={renderOrderItem} />
            </View>
            <View style={styles.finalContainer}>
                <BoldText style={styles.bigText}>Total Amount : </BoldText>
                <Text style={styles.totalAmountText}>$ {totalAmount}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    totalAmountText: {
        color: Colors.Accent,
        fontSize: 17
    },
    bigText: {
        fontSize: 20,
        alignItems: 'center',
        color: 'white',
        marginEnd: 10
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
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default OrderScreen