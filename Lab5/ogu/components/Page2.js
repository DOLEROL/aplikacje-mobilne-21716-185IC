import React, { useState } from "react";
import { Text, View, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from '../style/styles';

export default function Page2() {
  const [count, setCount] = useState(0);
  const showAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        { 
          text: "OK"
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );

  return (
    <View style={styles.Container}>
      <Text>Count: {count}</Text>
      <TouchableHighlight 
        style={styles.button}
        onPress={() => setCount(count => count + 1)}
      >
        <Text>Touch Here</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.button}
        onPress={showAlert}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}