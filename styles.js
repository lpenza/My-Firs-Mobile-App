import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    inputContainer: {
        marginTop: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'violet',
        marginRight: 10,
        color: 'red',
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    itemContainer: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#52528C',
        borderRadius: 5,
        marginVertical: 5,
    },
    item: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});