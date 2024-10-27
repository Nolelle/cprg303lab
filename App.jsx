/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry',
  'Go to gym',
  'Walk dog']);

  return (
    <SafeAreaView>
      <TodoList tasks = {tasks}/>
      <TodoForm/>
    </SafeAreaView>
  );
}


