import React from 'react'
import { Platform } from "react-native";

import HeaderButton from '../../components/tool/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


const IconButton = ({ ios, android, size, color, onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Buy"
                color={color}
                size={size}
                iconName={Platform.OS === 'ios' ? ios : android}
                onPress={onPress} />
        </HeaderButtons>

    )
}

export default IconButton