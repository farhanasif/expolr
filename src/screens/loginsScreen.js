import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, Alert, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function loginScreen({ navigation }) {

  return (
    <ScrollView style={{ 
      flex: 1, 
      backgroundColor: '#ffff'
      }}>
      <View style={styles.container}>
        <View
        style={{
          paddingTop: 70
        }}>
          <Image 
          source = {require('./logo.png')} 
          style = {styles.logo}
          />
        </View>
      <StatusBar style="auto" />
      </View>
      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        }}>
      </View>

      <View style={styles.input}>
        <Entypo name="mail" size={35} color="green" />
        <TextInput
          style={styles.inputField}
          placeholder="ই-মেইল   "
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="green"
        />
      </View>
      <View style={styles.input}>
        <Entypo name="keyboard" size={35} color="green" />
        <TextInput
          style={styles.inputField}
          placeholder="পাসওয়ার্ড"
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="green"
        />
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
        title="সাইন ইন"
        color= "green"
        //onPress={() => navigation.navigate('About')}
        onPress={() => Alert.alert('No User Found')}
      />
      </View>

      <View style={styles.buttonStyle}>
      <Button
        title="জিমেইলের সাহায্যে সাইন ইন"
        color= "red"
        onPress={() => navigation.navigate('About')}
      />
      </View>
      
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        }}>
        <Text style={styles.text}
        onPress={() => navigation.navigate('About')}>
          নতুন একাউন্ট করুন</Text>
        <Text style={styles.text}
        onPress={() => navigation.navigate('About')}>
          পাসওয়ার্ড ভুলে গেছেন</Text>
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
        <Text style={styles.text3}>testing @ 28 Oct, 2020</Text>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    fontSize: 18,
    paddingTop: 10,
    color: 'green', 
    fontWeight: '900'
  },
  text2: { 
    fontSize: 20, 
    fontWeight: '600',
    color: 'red'
  },
  text3: { 
    fontSize: 12, 
    fontWeight: '600',
    color: 'rebeccapurple'
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
    // marginTop: 5,
    // paddingBottom: 5,
    // fontWeight: "bold",
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#ffff",
    paddingVertical: 10,
    paddingHorizontal: 85
  },
  inputField: {
    paddingTop: 10,
    paddingRight: 120,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
},
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
}
});
