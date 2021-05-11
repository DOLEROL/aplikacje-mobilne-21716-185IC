import React, {useState} from 'react';
import {View, Button, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../style/styles';

export default function Page3() {
  const onSubmitSteps = () => Alert.alert(
    "Data",
    `${date.getHours()}:${date.getMinutes()} \n${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { 
        text: "OK"
      }
    ]
  );
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.Container}>
      <View style={{width:200}}>
        <Button onPress={showDatepicker} title="Wyświetl Datę" />
      </View>
      <View style={{width:200}}>
        <Button onPress={showTimepicker} title="Wyświetl Godzinę" />
      </View>
      <View style={{width:200,paddingTop:20}}>
        <Button color="red" onPress={onSubmitSteps} title="Wyświetl termin" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}