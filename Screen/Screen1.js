import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Linking } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { Ionicons } from '@expo/vector-icons'
import {firebase} from '../Database';

export default function Screen1({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const handleLogin = () => {
    // Check if email and password are correct
    if (email === "correct@email.com" && password === "password123") {
      // Navigate to the next page if login details are correct
      navigation.navigate('page2');
    } else {
      // Display error message or handle incorrect login details
      alert("Incorrect email or password");
    }

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigation.navigate('Screen2')
    })


  };
const handleTwitterPress = () => {
  Linking.openURL('https://twitter.com');
};
const handleFacebookPress = () => {
  Linking.openURL('https://www.facebook.com/signup');
};
const handleGooglePress = () => {
  Linking.openURL('https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&service=mail&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          // placeholderTextColor="gray"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          // placeholderTextColor="#gray"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
      <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={30} color="black" />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.forgot_button}>LOGIN</Text>
        </TouchableOpacity>
      </View>
<View style={styles.social}>
<TouchableOpacity style= {styles.google} onPress={handleGooglePress}>
 {/* <Image source={require('../assets/google.jpg')}style={styles.google}/>  */}
      <AntDesign name="google" size={35} color="#4285F4" /> 
</TouchableOpacity>

<TouchableOpacity style={styles.facebook} onPress={handleFacebookPress}>
<Entypo name="facebook-with-circle" size={35} color="#3b5998" /> 
</TouchableOpacity>
<TouchableOpacity style={styles.twitter} onPress={handleTwitterPress}>
<AntDesign name="twitter" size={35} color="#00acee" /> 
</TouchableOpacity>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,

  },
  social: {
  flexDirection:'row',
  justifyContent:'center',
  gap:80,
  paddingTop:40,  
},
eye:{
  position:'absolute',
  paddingLeft:250,
  paddingBottom:25,
},
});



