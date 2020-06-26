import React, { useState } from 'react'
import { View, Image, Alert, StyleSheet, Platform } from "react-native";
import Colors from '../../constants/Colors';

import BoldText from '../tool/BoldText'
import Text from "../tool/Text";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const QuantityController = ({ initialValue, onValueChange, quantityEditable }) => {
    const [count, setCount] = useState(initialValue)

    const updateCount = (action) => {
        if (action === 'ADD') {
            setCount(count + 1)
            onValueChange(action)
        } else if (action === 'SUB') {
            if (count > 1) {
                setCount(count - 1)
                onValueChange(action)
            } else {
                Alert.alert(
                    'Alert',
                    'Are you sure want to delete this product from cart?',
                    [
                        {
                            text: "Cancel",
                            style: "cancel"
                        },
                        {
                            text: "Ok",
                            onPress: () => onValueChange('DEL')
                        }
                    ],
                    { cancelable: false }
                )
            }

        }
    }

    return (
        <View style={styles.container}>
            {quantityEditable &&
                <TouchableWithoutFeedback style={styles.button} onPress={updateCount.bind(this, 'ADD')}>
                    <BoldText style={styles.buttonText}>+</BoldText>
                </TouchableWithoutFeedback>
            }
            <Text style={styles.countText}>{count}</Text>
            {quantityEditable &&
                <TouchableWithoutFeedback style={styles.button} onPress={updateCount.bind(this, 'SUB')}>
                    <BoldText style={styles.buttonText}>-</BoldText>
                </TouchableWithoutFeedback>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: Colors.Primary,
        width: 30,
        alignItems: 'center',
        borderRadius: 40,
        overflow: 'hidden'
    },
    countText: {
        fontSize: 16
    },
    buttonText: {
        fontSize: 19,
        color: 'white'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 90,
        flexDirection: 'row'

    }
})
export default QuantityController