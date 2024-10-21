/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

export default function App() {
  return (
    <SafeAreaView>
      <TodoList/>
      <TodoForm/>
    </SafeAreaView>
  );
}


