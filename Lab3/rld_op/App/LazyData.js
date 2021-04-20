import React from 'react';
import { Text } from 'react-native';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var LazyArray = new Array();

for(var i = 0; i < 600; i++){
    LazyArray.push(generateString(Math.floor(Math.random() * (10 - 5 + 1)) + 5));
}

export default function LazyData() {
  return (
    LazyArray.map((element) =>{
        return <Text key={element}>{element}</Text>
    })
  );
}