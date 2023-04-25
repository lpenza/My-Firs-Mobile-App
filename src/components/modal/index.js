import React from "react";
import { Modal, View, Text, Button } from "react-native";
import {styles} from './styles'


export const DeleteModal = ({ modalVisible, animationType, title, confirmationText, moreInformation, primaryButton, onHandlerPrimaryButton,secondaryButton,onHandlerSecondaryButton,primaryButtonColor,secondaryButtonColor }) => {
    return (
        <Modal visible={modalVisible} animationType={animationType}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{title}</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>{confirmationText}</Text>
                    <Text style={styles.selectedEvent}>{moreInformation}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={primaryButton}
                        color={primaryButtonColor}
                        onPress={onHandlerPrimaryButton}
                    />
                    <Button
                        title={secondaryButton}
                        color={secondaryButtonColor}
                        onPress={onHandlerSecondaryButton}
                    />
                </View>
            </View>
        </Modal>
    )
}


export default DeleteModal