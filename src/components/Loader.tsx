import React from 'react'
import { ActivityIndicator, useColorScheme, View } from 'react-native'
import { darkTheme, lightTheme } from '../types/themes';

export default function Loader({ loading }: { loading: boolean }) {

    const theme = useColorScheme() == 'dark' ? darkTheme : lightTheme;




    return (
        <View style={{
            display: loading ? "flex" : "none",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
            zIndex: 1,
            backgroundColor: theme.onBackground,

        }}>
            <ActivityIndicator size={"large"} animating={loading} />
        </View>
    )
}