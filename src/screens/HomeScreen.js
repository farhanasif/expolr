import React, { useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import {AuthContext} from '../providers/AuthProvider';
import  {Button} from 'react-native-elements';

const HomeScreen = (props) =>{
  return (
    <AuthContext>
      {(auth) => (
        <View>
          <Text> Welcome to HomeScreen! </Text>
          <Button
            type="outline"
            title="Log out!"
            onPress={ function(){
              auth.setIsLoggedIn(false);
            }}
          />
        </View>
      )}
    </AuthContext>
  );
}; 

const styles = StyleSheet.create({
    textStyle:{
      fontSize: 30,
      color:"blue",
  }
});

export default HomeScreen;