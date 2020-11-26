import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import { Input,Button, Card } from 'react-native-elements';
import { FontAwesome, Feather,AntDesign,Ionicons } from '@expo/vector-icons';


const SignUpScreen = (props) =>{
  return (
    <View style={styles.viewStyle}>
    <Card>
      <Card.Title>Welcome to Sign Up Screen!</Card.Title>
      <Card.Divider/>

      <Input
      leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
        placeholder="Name"
      />
    <Input
      leftIcon={<Ionicons name="ios-school" size={24} color="black" />}
        placeholder="Student ID"
      />

      <Input
      leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
        placeholder="E-mail Address"
      />

      <Input
      leftIcon={<Feather name="key" size={24} color="black" />}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        icon={<AntDesign name="user" size={26} color="white"/>}
        title=" Sign Up!"
        type='solid'
      />

      <Button
        icon={<AntDesign name="login" size={26} color="dodgerblue"/>}
        title="Already have an account ?"
        type='clear'
        onPress={
          function(){
            props.navigation.navigate("SignIn");
          }
        }
      />
    </Card>
  </View>

  );
}; 

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"#4bacb8",
  }
});

export default SignUpScreen;