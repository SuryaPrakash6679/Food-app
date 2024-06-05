import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <TextInput
      placeholder='Emial'

      />
        <TextInput
      placeholder='Password'
      
      />
      <TouchableOcity onPress = {handleSignup}>
        <Text>
            Register
        </Text>
      </TouchableOcity>
      
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})