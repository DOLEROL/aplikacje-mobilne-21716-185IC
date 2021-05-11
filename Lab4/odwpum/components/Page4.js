import React from 'react';
import { View,  Button, ToastAndroid, SafeAreaView } from "react-native";
import styles from '../style/styles';


export default function Page4() {
    const showToast = () => {
      ToastAndroid.show(
        "Lorem ipsum dolor sit amet",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    };
    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity(
        "consectetur adipiscing elit",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    };    
    const showToastWithGravityAndOffset = () => {
      ToastAndroid.showWithGravity(
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        100,
        200
      );
    };   
      
  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.safeArea}>
        <Button 
          title="Toggle1" 
          onPress={() => showToast()} />
        <Button
          title="Toggle2"
          onPress={() => showToastWithGravity()}
        />
        <Button
          title="Toggle3"
          onPress={() => showToastWithGravityAndOffset()}
        />
      </SafeAreaView>
    </View>
  );
}