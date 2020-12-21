import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../navigation/TabNavigator';
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height: 100
                },
                headerTintColor: "#FFFFFF",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    )
}
export default StackNavigator;