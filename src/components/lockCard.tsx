import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { darkTheme, lightTheme } from "../types/themes";


export default function LockCard({ label, isrefresh }: { label: string, isrefresh?: boolean }) {
    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;

    const background = theme.onBackground;

    return (
        <View style={[styles.LockContainer, { borderColor: theme.fontcolor, backgroundColor: background }]} >
            <Text style={[{ color: theme.fontcolor }, styles.Text]}>{label}</Text>
            {
                isrefresh &&
                <Icon name="reload" size={28} style={{ fontWeight: 800, color: theme.fontcolor }} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    LockContainer: {
        padding: 16,
        paddingVertical: 48,
        borderRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    Text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});