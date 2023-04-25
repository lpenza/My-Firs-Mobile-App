import { StyleSheet } from 'react-native';
import {colors} from '../../constants/colors'

export const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        marginRight: 10,
        color: colors.inputColor,
    },
});