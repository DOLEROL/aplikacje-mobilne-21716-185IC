import * as React from 'react';
import { lazy, Suspense} from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import styles from '../style/styles';
const LazyData = lazy(() => import('./LazyData'));

export default function Page1() {
  return (
    <View style={styles.Container}>
      <Suspense fallback={<ActivityIndicator color="#e60000" size="large" />}>
        <ScrollView>
          <Text style={[ styles.baseText, styles.textStyle ]}>
            <LazyData />
          </Text>
        </ScrollView>
      </Suspense>
    </View>
  );
}