import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome Dhaka South City Corporation</Text>
      </View>
      <View style={styles.button}>
        <Button title="Go to Details" onPress={() => navigation.navigate('About')}/>
        <Button title="CREATE AN ACCOUNT" style={styles.register} onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop:200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    paddingTop:100,
    fontSize:16,
    fontFamily: "Cochin"
  },
  register: { 
    fontSize: 20, 
    fontWeight: '600',
    color: 'red',
    padding:10,
  }
});
