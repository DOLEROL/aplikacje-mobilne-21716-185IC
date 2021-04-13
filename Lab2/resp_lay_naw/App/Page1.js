import * as React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../style/styles';

export default function Page1({ navigation }) {
  return (
    <View style={styles.page1Container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {"\n"}
          Spread syntax (...) &nbsp;
        </Text> 
        <Text>
          pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, 
          tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych). 
        </Text>
        <Text>
          {"\n"}{"\n"}
          Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, 
          gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).
        </Text>
      </Text>
      <Image
        style={styles.spreadImg}
        source={require('../style/img/img1.png')}
      />
    </View>
  );
}