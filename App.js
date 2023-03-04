
import { StyleSheet,View, Text} from 'react-native';
import React, { Component } from 'react';
import Petshop from './Petshop';
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Preview from './Preview';


const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <stack.Navigator initialRouteName='PetShop' screenOptions={{header: ()=> null}}>
        <stack.Screen name='PetShop' component={Petshop}   />
        <stack.Screen name='Preview' component={Preview} />
      </stack.Navigator>

      </NavigationContainer>
  )
}

// options={{title: "name of site", headerStyle: {backgroundColor: "red"},}}