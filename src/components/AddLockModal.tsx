import { Modal, Pressable, StyleSheet, TextInput, useColorScheme, View } from "react-native";
import { darkTheme, lightTheme } from "../types/themes";
import { Text } from "@react-navigation/elements";


interface AddLockModalProps {
    visible: boolean;
    onClose: () => void;
    identifier: string;
    setIdentifier: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    label: string;
    setLabel: (text: string) => void;
}


export default function AddLockModal({ visible, onClose, identifier, setIdentifier, password, setPassword, label, setLabel }: AddLockModalProps) {

    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;




    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={[styles.centeredView]}>

                <View style={[styles.container, { backgroundColor: theme.background }]}>
                    <View style={styles.titleContainer}>
                        <Text style={[{ color: theme.fontcolor }, styles.title]}>Ajouter une serrure</Text>
                    </View>
                    <View style={styles.innerInputContainer}>
                        <Text style={[styles.subtitle, { color: theme.fontcolor }]}>Identifiant de la serrure</Text>
                        <TextInput style={[styles.inputContainer, { borderColor: theme.fontcolor }]} placeholder="Identifiant de la serrure" value={identifier} onChangeText={setIdentifier} />
                    </View>
                    <View style={styles.innerInputContainer}>
                        <Text style={[styles.subtitle, { color: theme.fontcolor }]}>Mot de passe de la serrure</Text>
                        <TextInput style={[styles.inputContainer, { borderColor: theme.fontcolor }]} secureTextEntry={true} placeholder="mot de passe de la serrure" defaultValue="password" value={password} onChangeText={setPassword} />
                    </View>
                    <View style={styles.innerInputContainer}>
                        <Text style={[styles.subtitle, { color: theme.fontcolor }]}>Label personnalisé</Text>
                        <TextInput style={[styles.inputContainer, { borderColor: theme.fontcolor }]} placeholder="Label de votre serrure" value={label} onChangeText={setLabel} />
                    </View>

                    <Pressable style={[styles.ButtonContainer, { borderColor: theme.fontcolor }]} onPress={() => { onClose() }}>
                        <Text style={{ color: theme.fontcolor }}>Ajouter</Text>
                    </Pressable>
                </View>
            </View>

        </Modal >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        width: '70%',
        height: "auto",
        padding: 16,
        justifyContent: "space-between",
        borderRadius: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 8,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
    },
    innerInputContainer: {
        gap: 8,
        marginVertical: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    ButtonContainer: {
        marginVertical: 16,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        borderWidth: 2,
    }

})
