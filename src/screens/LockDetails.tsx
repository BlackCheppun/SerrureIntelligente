import React from 'react';
import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import LockCard from '../components/lockCard';
import { darkTheme, lightTheme } from '../types/themes';

const LockDetails: React.FC = () => {

    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;

    return (
        <View style={[{ backgroundColor: theme.background, flex: 1 }, styles.container]} >
            <Text style={[styles.Title]}>Bonjour</Text>

            <Pressable style={styles.StateButton}>
                <LockCard label="Etat de la serrure" isrefresh />
            </Pressable>

            <View style={styles.ActionContainer}>
                <Pressable style={{ flex: 1 }} onPress={() => console.log('pressed')}>
                    <LockCard label="Ouvrir la serrure" />
                </Pressable>
                <Pressable style={{ flex: 1 }}>
                    <LockCard label="Fermer la serrure" />
                </Pressable>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    Title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    ActionContainer: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-between',
    },
    StateButton: {
        marginVertical: 8,
    }
});

export default LockDetails;