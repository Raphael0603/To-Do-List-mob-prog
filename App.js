import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native';
import Task from './components/Task';

export default function App() {
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}
const updateTaskText = (index, newText) => {
  let itemsCopy = [...taskItems];
  itemsCopy[index] = newText;
  setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
     {/*Today's Tasks*/}
     <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <Text style={styles.sectionMaker}>By John Raphael Albiso</Text>
      <View style={styles.items}>
          {/*Task will go here*/}
          {
            taskItems.map((item, index) => {
             return (
      
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                
                <Task text={item} style={styles.textGuro} onUpdate={(newText) => updateTaskText(index, newText)} />
                
              </TouchableOpacity>
             )
            })
          }

          {/* {<Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text={'Task 3'} /> } */}
          
      </View>

     </View>
     

     {/*Write a task with keyboard*/}
     <SafeAreaView
     behavior={Platform.OS === "android" ? "padding" : "height"}
     style={styles.writeTaskWrapper}
     >
      <TextInput style={styles.input} placeholder={'Write a task'} value={task}onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    
     </SafeAreaView>
     
    </View>
   
  );
  
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionMaker: {
    fontSize: 13,
    fontStyle: 'italic',
    color: 'red'

  },
  items: {
    marginTop: 20,
    
  },  
 textGuro: {
  color: 'C0C0C0',
 },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  }
});
