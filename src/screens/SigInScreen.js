import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import { Input,Button, Card } from 'react-native-elements';
import { FontAwesome, Feather,AntDesign } from '@expo/vector-icons';

const SigInScreen = (props) =>{
  return (

    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to AuthApp!</Card.Title>
        <Card.Divider/>
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
          icon={<AntDesign name="login" size={26} color="white"/>}
          title=" Sign In!"
          type='solid'
        />

        <Button
          icon={<AntDesign name="user" size={26} color="dodgerblue"/>}
          title="Don't have an account ?"
          type='clear'
          onPress={
            function(){
              props.navigation.navigate("SignUp");
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

export default SigInScreen;