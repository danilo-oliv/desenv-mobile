import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import styles from '../styles/styles';

export default function ScrollViewScreen(){
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
    ];

    return(
        <SafeAreaView style={styles.scrollContainer}>
            <Text style={styles.title}>Exemplo simples de ScrollView</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {items.map((label) => (
                    <View key={label} style={styles.scrollItem}>
                        <Text style={styles.scrollItemText}>{label}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
