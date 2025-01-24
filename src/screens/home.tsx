import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { ParamListBase, NavigationProp } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";

interface props {
    navigation: NavigationProp<ParamListBase>;
}

const data = [
    { lockID: "1", lockName: "Lock 1" },
    { lockID: "2", lockName: "Lock 2" },
    { lockID: "3", lockName: "Lock 3" },
];


export default function Home({ navigation }: props) {
    return (

        <>
            <View style={styles.TopContainer}>
                <Text style={styles.Title}>Bonjour</Text>
                <Pressable>
                    <Icon name="add" size={32} style={{ fontWeight: 800 }} />
                </Pressable>
            </View>
            <View>
                {
                    data.map((item, index) => {
                        return (
                            <Pressable style={styles.LockContainer} key={index} onPress={() => navigation.navigate('lockdetails', { lockID: item.lockID })}>
                                <Text>{item.lockName}</Text>
                                <Icon name="chevron-forward" size={32} style={{ fontWeight: 800 }} />
                            </Pressable>
                        )
                    })}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    TopContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    LockContainer: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});