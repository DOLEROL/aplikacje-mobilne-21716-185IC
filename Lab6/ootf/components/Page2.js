import React from 'react';
import { lazy, Suspense} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import styles from '../style/styles';
const LazyImg = lazy(() => import('./LazyImg'));

export default function Page2() {
  return (
    <View style={styles.Container}>
      <Suspense fallback={<ActivityIndicator color="#e60000" size="large" />}>
        <ScrollView>
          <LazyImg />
          <MaterialCommunityIcons name="heart" color={'rgba(102, 178, 255, 0.9)'} size={32}/>
          <MaterialCommunityIcons name="android" color={'rgba(102, 178, 255, 0.9)'} size={32}/>
          <MaterialCommunityIcons name="barrel" color={'rgba(102, 178, 255, 0.9)'} size={32}/>
          <MaterialCommunityIcons name="baguette" color={'rgba(102, 178, 255, 0.9)'} size={32}/>
        </ScrollView>
      </Suspense>
    </View>
    );
}