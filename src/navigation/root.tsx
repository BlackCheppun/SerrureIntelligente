import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect } from "react"
import LockDetails from "../screens/LockDetails";
import Home from "../screens/home";
import { lockService } from "../services/lock.service";


const rootStack = createNativeStackNavigator();

export default function Root() {


    useEffect(() => {
        const regUser = async () => {
            await lockService.addidOnfirstime();
        }
        regUser();
    }, []);

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