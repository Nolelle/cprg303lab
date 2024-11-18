/**
 * My To Do List App
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import TodoForm from './ToDoForm';
import TodoList from './ToDoList';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView>
        <Stack.Navigator>
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
