import React, { useState } from "react";
import {TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-web";
import styles from "../styles/styles";
import GenericModal from "../components/modals/Modal";

export default function ModalFadeScreen(){
    const [visible, setVisible] = useState(false);

    function openModal(){
        setVisible(true);
    }

    function closeModal(){
        setVisible(false);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Esta tela exibirá o Modal com Animação Fade
            </Text>

            <TouchableOpacity style={styles.button} onPress={openModal}>
                <Text style={styles.buttonText}>Abrir Modal</Text>
            </TouchableOpacity>

            <GenericModal visible={visible} onClose={closeModal} animation="fade" text="Olá! Este é um modal genérico.">
                <Text style={styles.modalChildText}>Apresentando animação Fade</Text>
            </GenericModal>
        </SafeAreaView>
    )
}
