import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import LockDetails from "../screens/LockDetails";
import Home from "../screens/home";


const rootStack = createNativeStackNavigator();

export default function Root() {

    return (
        <NavigationContainer>
            <rootStack.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }}
            >
                <rootStack.Screen name="Home" component={Home} />
                <rootStack.Screen name="lockdetails" component={LockDetails} />
            </rootStack.Navigator>
        </NavigationContainer >
    )
}