import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PhoneRegister, Verification, Home, Booking, MyWallet, Profile } from "../screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigators = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    if(isSignedIn == true){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Booking') {
                            iconName = focused ? 'briefcase' : 'briefcase-outline';
                        } else if (route.name === 'MyWallet') {
                            iconName = focused ? 'wallet' : 'wallet-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
                    <Tab.Screen options={{headerShown: false}} name="Booking" component={Booking} />
                    <Tab.Screen options={{headerShown: false}} name="MyWallet" component={MyWallet} />
                    <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
    else{
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="PhoneRegister" component={PhoneRegister} />
                    <Stack.Screen name="Verification" component={Verification} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default Navigators;