import React from 'react'
import { TouchableWithoutFeedback, Platform, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ios, android, size, color, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Ionicons name={Platform.OS === 'ios' ? ios : android} size={size} color={color} />
        </TouchableWithoutFeedback>

    )
}

export default IconButton