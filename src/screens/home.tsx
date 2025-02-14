import { Button, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { ParamListBase, NavigationProp } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { darkTheme, lightTheme } from "../types/themes";
import { lockService } from "../services/lock.service";
import { Key, useEffect, useState } from "react";
import AddLockModal from "../components/AddLockModal";
import WarningModal from "../components/Warningmodal";

interface props {
    navigation: NavigationProp<ParamListBase>;
}

export default function Home({ navigation }: props) {
    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;

    const [locks, setlocks] = useState<string[][]>([[]]);

    useEffect(() => {
        const fetchlocks = async () => {
            const data = await lockService.getLocks();
            if (data) {
                setlocks(data);
            }
        };
        fetchlocks();
    }, []);


    const [identifier, setIdentifier] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [warningVisible, setWarningVisible] = useState<boolean>(false);
    const [warningLabel, setWarningLabel] = useState<string>('');

    const addlock = async () => {
        if (identifier == '' || password == '' || label == '') {
            setWarningLabel('Veuillez remplir tous les champs');
            setWarningVisible(true);
        }
        else {
            const res = await lockService.addLock(identifier, password, label);
            if (res) {
                setModalVisible(false);
            }
        }
    }


    return (

        <View style={{ flex: 1, backgroundColor: theme.background }} >
            <AddLockModal setVisible={(val) => setModalVisible(val)} visible={modalVisible} onClose={() => { addlock() }} identifier={identifier} label={label} password={password} setIdentifier={(text) => setIdentifier(text)} setLabel={(text) => setLabel(text)} setPassword={(text) => setPassword(text)} />
            <WarningModal label={warningLabel} visible={warningVisible} onClose={() => setWarningVisible(false)} />
            <View style={styles.TopContainer}>
                <Text style={[styles.Title, { color: theme.fontcolor }]}>Bonjour</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Icon name="add" size={32} style={{ fontWeight: 800, color: theme.fontcolor }} />
                </Pressable>
            </View >
            <View>
                {
                    locks.map((item: string[], index: Key | null | undefined) => {
                        return (
                            <Pressable style={[styles.LockContainer, { borderColor: theme.fontcolor }]} key={index} onPress={() => navigation.navigate('lockdetails', { lockID: item[0], lockLabel: item[1] })}>
                                <Text style={{ color: theme.fontcolor }}>{item[1]}</Text>
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