import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('dhanush');
  const [age,setAge] = useState(20)
  return (
    <View style={styles.container}>
      <Text>Enter Name :</Text>
      <TextInput 
      multiline
      style={styles.input} 
      placeholder='e.g Dhanush'
      onChangeText={(value)=>setName(value)}/>

      <Text>Enter Age :</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input} 
      placeholder='e.g 20'
      onChangeText={(value)=>setAge(value)}/>
      <Text>name :{name} age :{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  }
});
