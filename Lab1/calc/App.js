import React,{useState} from 'react';
import { Button, StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';

export default function App() {
  const [count, setCount] = useState('');
  const data = [
    {key: '7'},{key: '8'},{key: '9'},{key: '*'},
    {key: '4'},{key: '5'},{key: '6'},{key: '-'},
    {key: '1'},{key: '2'},{key: '3'},{key: '+'},
    {key: 'CE'},{key: '0'},{key:'='},{key: '/'},
  ];
  const sum = (param) =>{
    if(param == '=') setCount(eval(count));
    else if(param == "CE") setCount('');
    else setCount(count + param);
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.output}>
          <Text style={styles.text}>{count}</Text>
        </View>
        <FlatList
          data={data}
          style={styles.list}
          numColumns={4}
          renderItem={({item,index}) =>{
            return(
              <View style={styles.item}>
                <Button style={styles.button} key={index} title={item.key} onPress={() => sum(item.key)}></Button>
              </View>    
            )
          }}
        />
      </SafeAreaView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop:24,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  output:{
    height:40,
    borderWidth:1,
    borderColor:'#add8e6',
    margin:1,
    padding:5,
  },
  item: {
    margin: 2,
    flex: 1,

  },
  button: {
    width: 100,
    flex: 1,
  },
  text:{
    textAlign:'right',
    fontSize:25,
  }
});
