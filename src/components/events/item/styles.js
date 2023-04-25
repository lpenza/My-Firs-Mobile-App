import { StyleSheet } from 'react-native';
import {colors} from '../../../constants/colors'

export const styles = StyleSheet.create({
    itemContainer: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: colors.backgroundItemColor,
        borderRadius: 5,
        marginVertical: 5,
    },
    item: {
        marginHorizontal: 10,
        color: colors.textItemColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
});