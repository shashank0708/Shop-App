import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import Colors from '../../constants/Colors'

import Text from '../tool/Text'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const OrderItem = ({ orderItem, navigation }) => {

  const { items } = orderItem
  const thumbs = []

  items.forEach(item => {
    thumbs.push(item.imageUrl)
  })

  const orderItemPressHandler = () => {
    navigation.navigate('Order', { orders: items, totalAmount: orderItem.totalAmount })
  }


  return (
    <View style={styles.headerContainer}>
      <TouchableNativeFeedback onPress={orderItemPressHandler}>
        <View>
          <View style={styles.orderHeader}>
            <Text style={styles.headerText}>$ {orderItem.totalAmount}</Text>
            <Text style={styles.headerText}>{orderItem.readableDate}</Text>
          </View>

          <ScrollView style={{ marginHorizontal: 5 }} horizontal={true}>
            {thumbs.map(
              (item, index) =>
                <View style={styles.imageContainer}>
                  <Image key={index.toString()} style={styles.thumb} source={{ uri: item }} />
                </View>)}
          </ScrollView>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: Colors.Primary,
    elevation: 5,
    margin: 10
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  headerText: {
    color: 'white'
  },
  thumb: {
    height: 70,
    width: 70,
    borderRadius: 20,
  },
  imageContainer: {
    marginVertical: 10,
    marginHorizontal: 5
  }
})

export default OrderItem