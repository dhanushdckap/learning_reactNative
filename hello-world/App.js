import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hi I am dhanush</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>hello there I am again <Text>dhanush</Text></Text>
        <Text>hello there I am again dhanush</Text>
        <Text>hello there I am again dhanush</Text>
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
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:"bold",
  },
  body:{
    backgroundColor:'yellow',
    padding:20
  }
});
