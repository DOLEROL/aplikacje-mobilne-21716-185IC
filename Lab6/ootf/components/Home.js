import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from '../style/styles';


export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={[ styles.homeTitleText, styles.textStyle ]}>
        Lab. nr 6 {"\n"}
        - {"\n"}
        Obsługa obrazów + tryb offline
      </Text>
      <SafeAreaView style={styles.safeArea}>
        <Image
          style={styles.image}
          source={require('../style/img/kot_pilot.png')}
        />
        <Image
          style={styles.image}
          source={{
            uri: 'https://img-9gag-fun.9cache.com/photo/aeAOXzp_700bwp.webp',
          }}
        />
      </SafeAreaView>
    </View>
  );
}