import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/styles';
import NetInfo from "@react-native-community/netinfo";

export default function Page3() {
  const [connectStatus, setConnectStatus] = useState("");
  NetInfo.fetch().then(state => {
    console.log("Is connected?", state.isConnected);
    if(state.isConnected){
      setConnectStatus("Connected")
    }else{
      setConnectStatus("Not Connected")
    }
  });
  
  return (
    <View style={styles.Container}>
      <Text>{connectStatus}</Text>
    </View>
    );
}