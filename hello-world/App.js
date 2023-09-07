import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View , FlatList,TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name : 'dhanush',id: '1'},
    {name : 'Jeeva',id: '2'},
    {name : 'Kishore',id: '3'},
    {name : 'Parasuraman',id: '4'},
    {name : 'Deepak',id: '5'},
    {name : 'Akash',id: '6'},
    {name : 'Sunil',id: '7'},
    {name : 'Bharat',id: '8'},

  ])

  const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
          return prevPeople.filter(person => person.id != id)
        })
  }
  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => {
            pressHandler(item.id)
          }}>
            <Text style={styles.listItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listItem:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24,
  }
});
