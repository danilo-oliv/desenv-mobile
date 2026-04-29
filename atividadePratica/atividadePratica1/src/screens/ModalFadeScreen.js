import React, { useState } from "react";
import {TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-web";
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
        <SafeAreaView>
            <Text>
                Esta tela exibirá o Modal com Animação Fade
            </Text>

            <TouchableOpacity  onPress={openModal}>
                <Text>Abrir Modal</Text>
            </TouchableOpacity>

            <GenericModal visible={visible} onClose={closeModal} animation="fade" text="Olá! Este é um modal genérico.">
                <Text >Apresentando animação Fade</Text>
            </GenericModal>
        </SafeAreaView>
    )
}
