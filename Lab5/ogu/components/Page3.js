import React, { useState } from 'react';
import Swipeable from 'react-native-swipeable';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../style/styles';

export default function Page3() {

  const [state, setState] = useState(false);
  const [stateToggle, setToggle] = useState(false);
  const leftContent = 
    <View style={[styles.leftSwipeItem, {backgroundColor: state ? 'lightgoldenrodyellow' : 'steelblue'}]}>
      {state ?
        <Text>release!</Text> :
        <Text>keep pulling!</Text>
      }
    </View>;

  const rightButtons = [
    <TouchableHighlight style={[styles.rightSwipeItem, {backgroundColor: 'papayawhip'}]}>
      <Text>Button 1</Text>
    </TouchableHighlight>,
    <TouchableHighlight style={[styles.rightSwipeItem, {backgroundColor: 'olivedrab'}]}>
      <Text>Button 2</Text>
    </TouchableHighlight>
  ];

  return (
    <View style={styles.ContainerSwipe}>
      <Swipeable 
        leftActionActivationDistance={200}
        leftContent={leftContent}
        onLeftActionActivate={() => setState(!state)}
        onLeftActionDeactivate={() => setState(!state)}
        onLeftActionComplete={() => setToggle(!stateToggle)}
        rightButtons={rightButtons} 
        rightActionActivationDistance={25}
        >
        <View style={[styles.listItem, {backgroundColor: stateToggle ? '#ff3333' : '#ff0000'}]}>
          <Text>Swipeable content</Text>
        </View>        
      </Swipeable>
    </View>
  );
}