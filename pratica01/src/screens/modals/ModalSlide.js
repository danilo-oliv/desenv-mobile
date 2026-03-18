import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalSlide(){

    const[visible, setVisible] = useState(false);

    return(
        <SafeAreaView>
            <Text>Modal Slide</Text>

            <TouchableOpacity onPress={() => setVisible(true)}></TouchableOpacity>

            <Text STYLE={{fontSize: 12}}>TESTE</Text>
        </SafeAreaView>
    )
}