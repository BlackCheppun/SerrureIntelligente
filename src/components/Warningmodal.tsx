import { Modal, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { darkTheme, lightTheme } from "../types/themes";

export default function WarningModal({ visible, onClose, label }: { visible: boolean, onClose: () => void, label: string }) {
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
                        <Text style={[{ color: theme.fontcolor }, styles.subtitle]}>{label}</Text>
                    </View>

                    <Pressable style={[styles.ButtonContainer, { borderColor: theme.fontcolor }]} onPress={() => { onClose() }}>
                        <Text style={{ color: theme.fontcolor }}>Fermer</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
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
