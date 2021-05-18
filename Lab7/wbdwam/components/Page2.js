import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";
import styles from '../style/styles';

const db = SQLite.openDatabase("db.db");

function Items({ onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [1],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Zrobione</Text>
      {items.map(({ id, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: "#1c9963",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: "#fff" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

export default function Page2() {
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  return (
    <View style={styles.Container}>
          <ScrollView style={styles.listArea}>
            <Items
              key={`done-${forceUpdateId}`}
              done
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
          </ScrollView>
          <MaterialCommunityIcons onPress={forceUpdate} name="refresh" color={'rgba(102, 178, 255, 0.9)'} size={40}/>
    </View>
  );
}