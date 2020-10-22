import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, paddingTop: 50}}>
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        <Entypo name="user" size={24} color="green" />
        
        <StatusBar style="auto" />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',

      }}>
        <Text style={styles.text2}>Apple</Text>
        <Text style={styles.text2}>Banana</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 30
      }}>
        <Text style={styles.text}>Row 1</Text>
        <Text style={styles.text}>Row 2</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    fontSize: 20, 
    fontWeight: '600'
  },
  text2: { 
    fontSize: 20, 
    fontWeight: '600',
    color: 'red'
  }
});
