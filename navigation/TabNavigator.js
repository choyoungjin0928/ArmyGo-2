import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../page/Main';
import Second from '../page/Second';
import Setting from '../page/Setting';
import Helpcall from '../page/Helpcall';
import { AntDesign } from "@expo/vector-icons";
const Tabs = createBottomTabNavigator();
const TabNavigator = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: "ArmyGo"
        })
    }, [])
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === "Main") {
                        iconName = "home";
                    } else if (route.name === "Second") {
                        iconName = "linechart";
                    } else if (route.name === "Setting") {
                        iconName = "setting";
                    } else if (route.name === "Helpcall") {
                        iconName = "infocirlceo";
                    }
                    return (
                        <AntDesign
                            name={iconName}
                            color={focused ? "hotpink" : "grey"}
                            size={26}
                        />
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black",
                    height: 80,
                },
                keyboardHidesTabBar: true
            }}
        >
            <Tabs.Screen name="Main" component={Main} />
            <Tabs.Screen name="Second" component={Second} />
            <Tabs.Screen name="Setting" component={Setting} />
            <Tabs.Screen name="Helpcall" component={Helpcall} />
        </Tabs.Navigator>)
}
export default TabNavigator