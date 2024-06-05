 import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOcity ,tabBar} from 'react-native';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import { FontAwesome5 } from '@expo/vector-icons';
import Screen3 from './Screen/Screen3';
import searchnavigation from './Screen/searchnavigation';
// import { ScrollView } from 'react-native-gesture-handler';
import GlobalStyles from './Styles/GlobalStyles';
import Addcart from './Screen/Addcart';
// import PaymentSuccess from './Screen/paymentsuccess';




const Stack = createNativeStackNavigator();
const Tab =createBottomTabNavigator();



function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='screen1'>
      <Stack.Screen name="Page1" component={Screen1} options={{ headerShown: false }} />
      <Stack.Screen name="page2" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="page3" component={Screen3} options={{ headerShown: false }} />
      <Stack.Screen name='page4' component={searchnavigation}  options={{ headerShown: false }} />
      <Stack.Screen name='Addcart' component={Addcart}  options={{ headerShown: false }} />
      {/* <Stack.Screen name='Paymentsuccess' component={PaymentSuccess}  options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
  

function MyTabs(){
    return(
    <Tab.Navigator
    // tabBarOptions={{
    // //   activeTintColor: '#673ab7',
    // //   inactiveTintColor: '#222',
    // }}  
    >
    {/* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}></Tab.Navigator> */}
      {/* <Tab.Screen 
        name="page1" 
        component={Screen1}
        options= {{

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} size={24} color={focused ? '#673ab7' : '#222'} />
          ),  
        }}
        /> */}
      <Tab.Screen 
      name="page2" 
      component={Screen2} 
      options={{ headerShown: false, 
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'fast-food' : 'fast-food-outline'} size={24} color={focused ? '#673ab7' : '#222'} />
        ), }} />
      
      <Tab.Screen name="page3" component={Screen3} 
            options={{ headerShown: false, 
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'restaurant' : 'restaurant-outline'} size={24} color={focused ? '#673ab7' : '#222'} />
        ), }} 
      />
    </Tab.Navigator>
    );
  }


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    
  );
}
