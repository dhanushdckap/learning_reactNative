import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name : 'dhanush',key: '1'},
    {name : 'Jeeva',key: '2'},
    {name : 'Kishore',key: '3'},
    {name : 'Parasuraman',key: '4'},
    {name : 'Deepak',key: '5'},
    {name : 'Akash',key: '6'},
    {name : 'Sunil',key: '7'},
    {name : 'Bharat',key: '8'},

  ])
  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.key}
        data={people}
        renderItem={({item})=>(
          <Text style={styles.listItem}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
      { people.map(value => (
          <View key={value.key}>
            <Text style={styles.listItem}>{value.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
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
