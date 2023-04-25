import React from "react";
import { TouchableOpacity,Text } from "react-native";
import {styles} from './styles'

const Item = ({onPress,item}) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress} >
            <Text style={styles.item}>{item.value}</Text>
        </TouchableOpacity>
    )
}

export default Item