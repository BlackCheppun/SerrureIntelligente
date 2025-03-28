import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, useColorScheme } from 'react-native';
import LockCard from '../components/lockCard';
import { darkTheme, lightTheme } from '../types/themes';
import { RouteProp, useNavigation } from '@react-navigation/native';
import Loader from '../components/Loader';
import { lockService } from '../services/lock.service';

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

    const [lockstate, setlockState] = useState<string | undefined>();

    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        getlockState()

    }, []);


    const getlockState = async () => {
        try {
            setLoading(true);
            const state = await lockService.lockState(lockID);
            setlockState(state);

        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const openlock = async () => {
        try {
            setLoading(true);
            const st = await lockService.openLock(lockID);
            setlockState(st);


        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const Closelock = async () => {
        try {
            setLoading(true);
            const state = await lockService.closeLock(lockID);
            setlockState(state);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <>
            <Loader loading={loading} />
            <View style={[{ backgroundColor: theme.background, flex: 1 }, styles.container]} >
                <Text style={[styles.Title, { color: theme.fontcolor }]}>{lockLabel}</Text>

                <Pressable style={styles.StateButton} onPress={() => getlockState()}>
                    <LockCard label="Etat de la serrure" isrefresh={lockstate} />
                </Pressable>

                <View style={styles.ActionContainer}>
                    <Pressable style={{ flex: 1 }} onPress={() => openlock()}>
                        <LockCard label="Ouvrir la serrure" />
                    </Pressable>
                    <Pressable style={{ flex: 1 }} onPress={() => Closelock()}>
                        <LockCard label="Fermer la serrure" />
                    </Pressable>
                </View>
            </View >
        </>
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