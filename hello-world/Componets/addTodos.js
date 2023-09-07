import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function AddTodos({submitTodos}) {
    const [text,setText] = useState('')
    const changeHandler = (value) => {
        setText(value);
    }

    return(
        <View>
             <TextInput
            style={styles.input}
            placeholder='new Todo...'
            onChangeText = {changeHandler}
            />
            <Button onPress={() => submitTodos(text)} title='add todo' color='coral'/>
        </View>

    )
}   

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})