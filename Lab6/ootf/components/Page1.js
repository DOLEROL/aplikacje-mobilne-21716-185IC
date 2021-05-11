import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../style/styles';

export default function Page1() {
    const [value, setValue] = useState(100);
    return (
        <View style={styles.Container}>
            <Slider
                style={{width: 200, height: 30}}
                minimumValue={100}
                maximumValue={200}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={((step) =>{setValue(step)})}
            />
            <Image
                style={{width: value, height: value}}
                source={require('../style/img/niezła_faza.png')}
            />
        </View>
    );
}