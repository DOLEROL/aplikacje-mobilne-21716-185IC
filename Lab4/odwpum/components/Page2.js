import React, { useState } from "react";
import { View, Switch, Modal, Pressable, Text } from 'react-native';
import styles from '../style/styles';

export default function Page2() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(0);
  const generateRandomNumber = () => {
    setValue(Math.floor(Math.random() * (1000 - 0 + 1)) + 0)
  }
  
  return (
    <View style={styles.Container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{value}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                setIsEnabled(!isEnabled);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={() => {
          setModalVisible(!modalVisible);
          setIsEnabled(!isEnabled);
          generateRandomNumber();
        }}
        value={isEnabled}
      />
    </View>
  );
}