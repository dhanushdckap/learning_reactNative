import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('dhanush');
  const [person,setPerson] = useState({name : 'mario',age :40});
  const clickHandler = () => {
    setName('parasuraman');
    setPerson({name :'dhanush',age:20});
  }
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <Text>his Name is {person.name} and His age is {person.age}</Text>
      <View style ={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
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
  buttonContainer:{
    marginTop:20,
  }
});
