import React  from "react";
import {createStackNavigator}from "@react-navigation/stack"
import TabNavigator from "../TabNavigator"
import StoryScreen from "../screens/StoryScreen"

const Stack= createStackNavigator()
const StackNavigator = ()=>{
    return (
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{HeaderShown:false}}>

     <Stack.Screen name = "Home" componment = {TabNavigator}/> 
     <Stack.Screen name = "StoryScreen" componment = {StoryScreen}/> 

        </Stack.Navigator>
    );
};

export default StackNavigator;