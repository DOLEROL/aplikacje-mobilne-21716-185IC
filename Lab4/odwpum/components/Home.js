import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import styles from '../style/styles';


export default function HomeScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState();
  return (
    <View style={styles.Container}>
      <Text style={[ styles.homeTitleText, styles.textStyle ]}>
        Lab. nr 4 {"\n"}
        - {"\n"}
        Obsługa danych wprowadzanych przez użytkownika + modale
      </Text>
      <SafeAreaView style={styles.safeArea}>
        <TextInput
          style={styles.input}
          placeholder='Imie'
          onChangeText={(val) => setName(val)}
          autoCapitalize='sentences'
          editable
          maxLength={40}
        />
        <TextInput
          style={styles.input}
          placeholder='Nazwisko'
          onChangeText={(val) => setSurname(val)}
          editable
          maxLength={40}
        />
        <TextInput
          style={styles.input}
          placeholder='Wiek'
          onChangeText={(val) => setAge(val)}
          editable
          maxLength={3}
        />
        <Text>Imie: {name}, Nazwisko: {surname}, Wiek: {age}</Text>
      </SafeAreaView>
    </View>
  );
}