import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter,setCounter]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red',
      }}>Hi</Text> 
       
       <Text style={{
        fontSize: 95,
        fontWeight: 'bold',
        color: 'blue',
      }}>{counter}</Text> 
<TouchableOpacity onLongPress={()=>{setCounter(counter+1)}} onPress={()=>{setCounter(counter+1)}}  style={{
        width: "100%",
        backgroundColor: 'red',
        padding: 10,
     
        alignItems:"center"
      }} >
  <Text style={{ color:"white",
        fontSize: 20,}}>
  Click Me
  </Text>
</TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
