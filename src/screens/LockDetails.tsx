import React from 'react';
import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import LockCard from '../components/lockCard';
import { darkTheme, lightTheme } from '../types/themes';
import { RouteProp, useNavigation } from '@react-navigation/native';

type LockDetailsRouteParams = {
    lockID: string;
    lockLabel: string;
};

type LockDetailsProps = {
    route: RouteProp<{ params: LockDetailsRouteParams }, 'params'>;
};

const LockDetails: React.FC<LockDetailsProps> = ({ route }) => {

    const { lockID, lockLabel } = route.params;

    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;

    return (
        <View style={[{ backgroundColor: theme.background, flex: 1 }, styles.container]} >
            <Text style={[styles.Title, { color: theme.fontcolor }]}>{lockLabel}</Text>

            <Pressable style={styles.StateButton}>
                <LockCard label="Etat de la serrure" isrefresh />
            </Pressable>

            <View style={styles.ActionContainer}>
                <Pressable style={{ flex: 1 }} onPress={() => console.log(lockID)}>
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