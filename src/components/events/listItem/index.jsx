import React from "react";
import { View,FlatList } from "react-native";
import {styles} from './styles'

const ListItem = ({data,renderItem,alwaysBounceVertical}) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                //no scroll para ios en caso de no tener los items suficientes
                alwaysBounceVertical={alwaysBounceVertical}
            />
        </View>
    )
}

export default ListItem