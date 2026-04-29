import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

import styles from '../../styles/styles';

export default function GenericModal({ visible, onClose, animation , text, children }) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType={animation}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.backdrop}>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <View style={styles.modal}>
                            {text ? <Text style={styles.modalText}>{text}</Text> : null}
                            {children}
                            <TouchableOpacity style={styles.closeButton} onPress={onClose} accessibilityLabel="Fechar modal">
                                <Text style={styles.closeText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}