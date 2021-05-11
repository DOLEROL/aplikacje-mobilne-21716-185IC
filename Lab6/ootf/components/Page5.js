import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import styles from '../style/styles';


export default function Page5() {
    const [tekst, setTekst] = useState("")
    const [text, setText] = useState("");
    const [connectStatus, setConnectStatus] = useState("");

    NetInfo.fetch().then(state => {
        console.log("Is connected?", state.isWifiEnabled);
        if(state.isWifiEnabled){
        setConnectStatus("Connected")
        }else{
        setConnectStatus("Not Connected")
        }
    });

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
            console.log(e)
        }
    }

    if(connectStatus=="Connected"){
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
    }else{
        return(
            <View style={styles.Container}>
               <Text>Not Connected <MaterialCommunityIcons name="baguette" color={'rgba(102, 178, 255, 0.9)'} size={32}/></Text>
            </View>
        );
    }
}
