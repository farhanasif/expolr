import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// import StyleSheet from './src/style/Register';

export default function RegisterScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <Image source = {require('../assets/logo/dssc-logo.png')}  style = {styles.logo}/>
      <View>
        <View style={styles.inputSearch}>
            <Entypo style={styles.allIcon} name="user"/>
            <TextInput style={styles.formInput} placeholder="Name" underlineColorAndroid="#0F8943"/>
        </View>

        <View style={styles.inputSearch}>
            <Entypo style={styles.allIcon} name="mail"/>
            <TextInput style={styles.formInput} placeholder="Email" underlineColorAndroid="#0F8943" />
        </View>
       
        <View style={styles.inputSearch}>
            <Entypo style={styles.allIcon} name="keyboard" />
            <TextInput style={styles.formInput} placeholder="Password" underlineColorAndroid="#0F8943" />
        </View>

        <View style={styles.inputSearch}>
            <Entypo style={styles.allIcon} name="keyboard"/>
            <TextInput style={styles.formInput} placeholder="Confirm password" underlineColorAndroid="#0F8943"/>
        </View>

        <View style={styles.inputSearch}>
            <Entypo style={styles.allIcon} name="mobile"/>
            <TextInput style={styles.formInput} placeholder="Mobile" underlineColorAndroid="#0F8943"/>
        </View>

      </View>

      <View style={styles.allButton}>
        <Button title="CREATE AN ACCOUNT" color= "green" onPress={() => navigation.navigate('About')}/>
      </View>

      <View style={styles.allButton}>
        <Button title="USE GMAIL ACCOUNT" color= "red" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
      },
      formInput:{
        height: 40,
        backgroundColor: "#fff", 
        color: '#FFF',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
      },

      allInputField: {
        flex: 1,
        paddingTop:10,
        paddingRight: 200,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        fontSize: 15,
        width: 250,
    },


    logo: {
        width: 250,
        height: 230,
        marginTop: 25,
        alignSelf: 'center'
    },

    allButton:{
        fontWeight: "bold",
        padding:8,
        marginTop:15,
        fontFamily: "Cochin"
    },
    allIcon: {
        padding: 10,
        color: '#0F8943',
        fontSize:24
    },
    
    inputSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});