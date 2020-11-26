import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import { Input,Button, Card } from 'react-native-elements';
import { FontAwesome, Feather,AntDesign } from '@expo/vector-icons';
import {AuthContext} from '../providers/AuthProvider';
import {getDataJSON} from '../functions/AsyncStorageFunctions';

const SigInScreen = (props) =>{

  const {Email, setEmail} = useState("");
  const {Password, setPassword} = useState("");

  return (

    <AuthContext.Consumer>
     {(auth)=>(
      <View style={styles.viewStyle}>
        <Card>
          <Card.Title>Welcome to Sign In Screen !</Card.Title>
          <Card.Divider/>
          <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
            placeholder="E-mail Address"

            onChangeText = {function(currentInput){
            setEmail(currentInput);
        }}
          />

          <Input
          leftIcon={<Feather name="key" size={24} color="black" />}
            placeholder="Password"
            secureTextEntry={true}

            onChangeText = {function(currentInput){
            setPassword(currentInput);
        }}
          />
          <Button
            icon={<AntDesign name="login" size={26} color="white"/>}
            title=" Sign In!"
            type='solid'
            onPress={function(){
              //console.log('ok');
              // auth.setIsLoggedIn(true);
              let UserData = getDataJSON(Email);
              if(UserData.password == Password){
                // props.navigation.navigation("Home");
                auth.setIsLoggedIn(true);
                auth.setCurrentUser(UserData);
              } else{
                alert('login Failed');
                console.log(UserData);
              }

            }}
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
     )}
    </AuthContext.Consumer>
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