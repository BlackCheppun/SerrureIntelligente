import { Button, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { ParamListBase, NavigationProp } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { darkTheme, lightTheme } from "../types/themes";
import { lockService } from "../services/lock.service";
import { Key, useEffect, useState } from "react";

interface props {
    navigation: NavigationProp<ParamListBase>;
}

export default function Home({ navigation }: props) {
    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;

    const [locks, setlocks] = useState<string[]>([]);

    useEffect(() => {
        const fetchlocks = async () => {
            const data = await lockService.getLocks();
            if (data) {
                setlocks(data);
            }
        };
        fetchlocks();
    }, []);


    console.log(locks);


    return (

        <View style={{ flex: 1, backgroundColor: theme.background }} >
            <View style={styles.TopContainer}>
                <Text style={[styles.Title, { color: theme.fontcolor }]}>Bonjour</Text>
                <Pressable>
                    <Icon name="add" size={32} style={{ fontWeight: 800, color: theme.fontcolor }} />
                </Pressable>
            </View >
            <View>
                {
                    locks.map((item: string, index: Key | null | undefined) => {
                        return (
                            <Pressable style={[styles.LockContainer, { borderColor: theme.fontcolor }]} key={index} onPress={() => navigation.navigate('lockdetails', { lockID: item })}>
                                <Text style={{ color: theme.fontcolor }}>{item}</Text>
                                <Icon name="chevron-forward" size={32} style={{ fontWeight: 800, color: theme.fontcolor }} />
                            </Pressable>
                        )
                    })}
            </View>
        </View>
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