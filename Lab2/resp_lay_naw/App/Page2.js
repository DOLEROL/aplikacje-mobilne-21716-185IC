import * as React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../style/styles';

export default function Page2({ navigation }) {
  return (
    <View style={styles.page2Container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {"\n"}
          Rest parameter &nbsp;
        </Text> 
        <Text>     
          składnia parametrów rest pozwala funkcji na przyjmowanie nieokreślonej liczby argumentów jako tablicy, 
          zapewniając sposób reprezentowania funkcji wariadycznych w JavaScript.
        </Text>
      </Text>
      <Image
        style={styles.restImg}
        source={require('../style/img/img2.png')}
      />
    </View>
  );
}