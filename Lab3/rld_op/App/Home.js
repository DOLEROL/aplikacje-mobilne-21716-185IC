import * as React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import styles from '../style/styles';

// utworzenie nowego Map();
const map = new Map();

// wprowadzenie 100 pseudo losowych liczb z zakresu 0 - 1000
for(var i = 0; i < 100; i++){
  map.set( i, Math.floor(Math.random() * (1000 - 0 + 1)) + 0 );
}

// funkcja sortująca
const sort = (map) => {
  for (const key of map.keys()) {
    var i = key + 1;
    var a;
    for(var j = key; j < 99; j++){
      if(map.get(key) > map.get(i)){
        a = map.get(key)
        map.set(key, map.get(i))
        map.set(i, a)
      }
      i++;
    }
  }
}

// wywołanie funkcji sortującej
sort(map);

// filtrowanie danych (usuwanie powtarzających się egzemplarzy)
const set = new Set();
for (const value of map.values()) {
  set.add(value);
}

// towrzenie tablicy
var Data = new Array();
// wprowadzanie wartości z obiektu set() do tablicy Data[]
for (const val of set.values()) {
  Data.push(val);
}
// zmiana zawartości tablicy Data[], za pomocą funkcji map(), wprowadzanie biektów do tablicy Data[]
Data = Data.map((value) => {
  return {
    id: `Data${value}`,
    title: value,
  }
});



const Item = ({ title }) => (
  <View style={styles.Item}>
    <Text style={styles.Title}>{title}</Text>
  </View>
);

export default function HomeScreen() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.Container}>
      <Text style={[ styles.homeTitleText, styles.textStyle ]}>
        Lab. nr 3 {"\n"}
        - {"\n"}
        Renderowanie listy danych + obsługa progresu
      </Text>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          style={styles.scrollView}
          numColumns={3}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}