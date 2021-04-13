import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../style/styles';

export default function Page3() {
  return (
    <View style={styles.page3Container}>
      <Text style={[styles.page3ItemText1, styles.baseText]}>
        <Text style={styles.titleText}>
          Hooki &nbsp;
        </Text>       
          są nowym dodatkiem w Reakcie 16.8. 
        Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.
      </Text>
      <Image
        style={styles.page3ItemImg}
        source={require('../style/img/img3.png')}
      />
      <Text style={[styles.page3ItemText2, styles.baseText]}>
        Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta.
        Na przykład <Text style={{ fontWeight: 'bold' }}>useState</Text> jest hookiem, 
        który pozwala korzystać ze stanu w komponencie funkcyjnym.
      </Text>
    </View>
  );
}