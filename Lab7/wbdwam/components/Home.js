import React, { useState, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from '../style/styles';

const db = SQLite.openDatabase("db.db");

export default function HomeScreen() {
  const [text, setText] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id int primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
      }
    );
  };

  return (
    <View style={styles.Container}>
      <Text style={[ styles.homeTitleText, styles.textStyle ]}>
        Lab. nr 7 {"\n"}
        - {"\n"}
        Wykorzystanie bazy danych w aplikacji mobilnej
      </Text>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="Dodaj zadanie"
              style={styles.input}
              value={text}
            />
          </View>
        
    </View>
  );
}