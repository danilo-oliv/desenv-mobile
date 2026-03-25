import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem</Text>
        </View>
    )
}