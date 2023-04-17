import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ipage } from "../../../App";

export function Pagina1({ setPageI }: Ipage){

    return (
        <View style={styles.container}>
            <Text>Página 1</Text>
            <TouchableOpacity onPress={()=> setPageI(2)}>
                <Text style={styles.botao}>{'>>'}</Text>
            </TouchableOpacity>
        </View>
    )
}