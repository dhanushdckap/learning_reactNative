import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View , FlatList,TouchableOpacity} from 'react-native';
import Header from './Componets/header';
import TodoItems from './Componets/todoItems';
import AddTodos from './Componets/addTodos';

export default function App() {

  const [todos,setTodos] = useState([
    {text: 'buy coffee',key:'1'},
    {text: 'create an app',key:'2'},
    {text: 'play on the switch',key:'3'},
  ])

  const deleteItem = (key) => {
    setTodos((CompletedTodo) =>{
      return CompletedTodo.filter(todos => todos.key != key);
    })
  }

  const submitTodos = (text) => {
    setTodos((CompletedTodo) => {
      // this is not a right way to add key value
      return [{text: text, key: Math.random().toString()},...CompletedTodo]
    })
}

  return (
    <View style={styles.container}>
      {/*header*/}
      <Header />
      <View style={styles.content}>
        {/* for form */}
        <AddTodos submitTodos={submitTodos}/>
        <View style={styles.list}>
          <FlatList
            data = {todos}
            renderItem={({item}) => (
              <TodoItems item={item} deleteItem={deleteItem}/>
            )}
          />

        </View>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  }
});
