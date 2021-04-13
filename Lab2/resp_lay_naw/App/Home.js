import * as React from 'react';
import { Platform, Button, View, Text } from 'react-native';
import styles from '../style/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitleText}>
        Lab. nr 2 {"\n"}
        - {"\n"}
        Responsywne layouty + nawigacja 
      </Text>
    </View>
  );
}