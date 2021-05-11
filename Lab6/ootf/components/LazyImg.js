import React from 'react';
import { Image } from 'react-native';
import styles from '../style/styles';


export default function LazyImg() {
  return (
    <>
      <Image
        style={styles.image2}
        source={{
          uri: 'https://wallpapersplanet.net/sites/default/files/15360x8640-wallpapers-38866-3386009.png',
        }}
      />
    </>
  );
}