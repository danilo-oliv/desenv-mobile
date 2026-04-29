import { useState } from "react"
import { TouchableOpacity } from "react-native";
import { TextInput, Text } from "react-native-gesture-handler";
import { View } from "react-native-web";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../config/firebaseConfig";


export default function FormScreen({navigation}){
    const [nomeCarro, setNomeCarro] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [valorAluguel, setValorAluguel] = useState('');
    const [dataAluguel, setDataAluguel] = useState('');

    const handleForm = async () => {
        if (!nomeCarro || !nomeCliente || !valorAluguel || !dataAluguel) {
            Alert.alert("Erro", "Preencha todos os campos do aluguel.");
            return;
        }
        try {
            await addDoc(collection(db, 'alugueis'), {
                nomeCarro,
                nomeCliente,
                valorAluguel: parseFloat(valorAluguel),
                dataAluguel,
            });
            Alert.alert("Sucesso", "Aluguel registrado!");
            console.log('Sucesso');
            
            navigation.navigate('List');
            }  catch (error) {
                console.log('Erro' + error);
                
        Alert.alert("Erro", "Falha ao salvar no Firestore.");
        }
    } 


    return(
        <View style={{flex: 1, flexDirection: "column"}}>
            <Text>Nome do carro: </Text>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', margin: 5}} value={nomeCarro} onChangeText={setNomeCarro} />
            <Text>Nome do cliente: </Text>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', margin: 5}} value={nomeCliente} onChangeText={setNomeCliente} />
            <Text>Valor do aluguel: </Text>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', margin: 5}} value={valorAluguel} onChangeText={setValorAluguel} />
            <Text>Data do aluguel: </Text>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', margin: 5}} value={dataAluguel} onChangeText={setDataAluguel} />
            <TouchableOpacity style={{backgroundColor: 'blue', margin: 4}} onPress={handleForm}><Text style={{color: 'white'}}>Enviar</Text></TouchableOpacity>
        </View>
    )
}