import react from "react"
import { TextInput, Button, View } from "react-native"
import { styles } from './styles'

const Input = ({ placeHolder, value, onChangeText, buttonColor, buttonTitle, onHandlerButton }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeHolder}
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={value}
            />
            <Button
                title={buttonTitle}
                color={buttonColor}
                onPress={onHandlerButton}
            />
        </View>
    )
}


export default Input