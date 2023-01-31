import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import StackNavigator from "./StackNavigaton";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;