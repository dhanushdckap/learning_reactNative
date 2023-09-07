import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function TodoItems({item,deleteItem}) {
    return(
        <TouchableOpacity onPress={()=>deleteItem(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}   

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    },
})