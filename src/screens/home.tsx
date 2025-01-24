import { Button, Text, View } from "react-native";
import { ParamListBase, NavigationProp } from '@react-navigation/native';

interface props {
    navigation: NavigationProp<ParamListBase>;
}

export default function Home({ navigation }: props) {
    return (
        <View>
            <Text >Home</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('lockdetails')} />
        </View>
    )
}