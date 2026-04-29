import React, { useState } from "react";
import {TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from "react-native-web";
import GenericModal from "../components/modals/Modal";

export default function ModalSlideScreen(){
    const [visible, setVisible] = useState(false);

    function openModal(){
        setVisible(true);
    }

    function closeModal(){
        setVisible(false);
    }

    return(
        <SafeAreaView >
            <Text >
                Esta tela exibirá o Modal com Animação Slide
            </Text>

            <TouchableOpacity  onPress={openModal}>
                <Text >Abrir Modal</Text>
            </TouchableOpacity>

            <GenericModal visible={visible} onClose={closeModal} animation="slide" text="Olá! Este é um modal genérico.">
                <Text >Apresentando animação Slide</Text>
            </GenericModal>
        </SafeAreaView>
    )
}