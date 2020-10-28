import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

const buttonPress = (val) => {
    alert('Hello, world!'+val)
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={() => buttonPress(22)}
        style={{ 
            backgroundColor: '#581845', 
            width: 200, 
            alignItems: 'center', 
            height: 60, 
            justifyContent: 'center',
            borderRadius: 13
            }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});

export default AboutScreen;