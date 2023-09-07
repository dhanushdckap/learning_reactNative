import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}   


const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        // flexDirection:'column',
        // justifyContent:'center',
        // justifyContent:'flex-end',
        // justifyContent:'flex-start',
        // justifyContent:'space-between',
        justifyContent:'space-around',
        // alignItems:'center',
        // alignItems:'flex-start',
        alignItems:'flex-end',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    boxOne:{
        flex:1,
        backgroundColor:"red",
        padding:10
    },
    boxTwo:{
        flex:1,
        backgroundColor:"yellow",
        padding:20
    },
    boxThree:{
        flex:1,
        backgroundColor:"lightgreen",
        padding:30
    },
    boxFour:{
        flex:1,
        backgroundColor:"lightblue",
        padding:40
    },
})