import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ToDoList({tasks}) {
    return (
        <ScrollView>
        <Pressable>
          <View style={[styles.task]}>
            {tasks.map((task) => (
              <Text style={styles.taskText}>{task}</Text>
              ))};
          </View>
        </Pressable>
      </ScrollView>
    )

}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});