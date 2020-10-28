import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function loginScreen({ navigation }) {

  return (
    <View style={{ 
      flex: 1, 
      paddingTop: 70,
      backgroundColor: '#ffff'
      }}>
      
      {/* <View>
        <Image 
        source = {require('./logo.png')} 
        style = {styles.logo}
        />
      </View> */}

      <View style={styles.container}>
        <View>
          <Image 
          source = {require('./logo.png')} 
          style = {styles.logo}
          />
        </View>
      <Entypo name="mail" size={35} color="green" />
      <Entypo name="keyboard" size={35} color="green" />
      <StatusBar style="auto" />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',

      }}>
      </View>


      {/* Text INPUT SYSTEM! */}
      {/* <View>
      <TextInput
      style={{ 
        height: 30, 
        borderColor: 'white', 
        borderWidth: 1
      }}
      />
      </View> */}

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 30
      }}>
      </View>
      
      <View style={styles.buttonStyle}>
      <Button
        title="Sign In"
        color= "green"
        onPress={() => navigation.navigate('About')}
      />
      </View>

      <View style={styles.buttonStyle}>
      <Button
        title="Login With Gmail"
        color= "red"
        onPress={() => navigation.navigate('About')}
      />
      </View>


      {/* <Button
        style={{
        paddingTop: 10,
        }}
        title="Go to Details"
        onPress={() => navigation.navigate('About')}
      /> */}

        <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 100,
        }}>
        <Text style={styles.text}>Testing today</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
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
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    flexWrap:'wrap',
    alignContent: "center",
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonStyle:{
    marginTop: 20,
    paddingBottom: 5,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
