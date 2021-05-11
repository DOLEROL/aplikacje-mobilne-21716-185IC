import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styles';


export default function Page4() {
  const [tekst, setTekst] = useState("")
  const [text, setText] = useState("");
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      console.log("Error", e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setTekst(value)
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <Button title="OK" onPress={() => {
        storeData(text)
        }}></Button>
      <Button title="press" onPress={() => getData()}></Button>
       <Text>{tekst}</Text>
    </View>
  );
}
