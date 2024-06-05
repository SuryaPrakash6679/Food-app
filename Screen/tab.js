import { View, Text,StyleSheet,navigation } from 'react-native'
import React from 'react'
import GlobalStyles from '../Styles/GlobalStyles'

export default function Tab({navigation}) {
  return (
    <View style={styles.tab1}>
      <View><Text style={GlobalStyles.tab1_Text} onPress={()=>{navigation.navigate("page3")}}>Trending Restaurant</Text></View>
      <View style={GlobalStyles.tab1_Text}><Text  onPress={()=>{navigation.navigate("page3")}}>Deal of the day</Text></View>
      <Text style={GlobalStyles.tab1_Text}  onPress={()=>{navigation.navigate("page3")}}>Pre booking offer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
       tab1:{
         flexDirection:'row',
         justifyContent:'space-evenly',
        // alignItems:'center',
  
       
       },
    
});