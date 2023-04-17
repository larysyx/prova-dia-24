import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ipage } from "../../../App";

export function Pagina2({ setPageI }: Ipage){

    return (
        <View style={styles.container}>
            <Text>Página 2</Text>
            <TouchableOpacity onPress={()=> setPageI(1)}>
                <Text style={styles.botao}>{'<<'}</Text>
            </TouchableOpacity>
        </View>
    )
}