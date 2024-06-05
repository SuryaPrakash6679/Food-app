  import { View, Text,Image,Button,StyleSheet,TouchableOpacity,Alert, Modal,Pressable } from 'react-native'
  import React, { useState } from 'react'
  import Icon from 'react-native-vector-icons/Ionicons';
  import GlobalStyles from '../Styles/GlobalStyles';
  import Addcart from './Addcart';

  export default function searchnavigation({navigation}) {
    const [modalVisible, setModalVisible] = useState(0);
    return(
  <View>   
      <View style={GlobalStyles.searchnavigation_section1}>
        <View style={GlobalStyles.searchnavigation_subsection1}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Puri 3Nos</Text>
          <Text style={{ fontSize: 18,marginTop:8 }}>$3</Text>
          <View style={{ flexDirection: 'row',marginTop:8 }}>
            <Icon name="star" size={26} color="green"  />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>4.2</Text>
          </View>
        </View>
        <View>
            <Image
               source={{ uri: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/puri-2-500x500.jpg' }}
               style={{ width: 200, height:160,borderRadius:20,}}
            />
             
           {/* <Button style={GlobalStyles.searchnavigation_button}
             title="Add Cart"  onPress={()=>{navigation.navigate('Addcart')}}
           /> */}
               <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}  onPress={()=>{navigation.navigate('Addcart')}}>Add Cart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add </Text>
      </Pressable>
    </View>

          </View>
       </View>
      <View style={GlobalStyles.searchnavigation_hrline}></View>
  </View>     
    );
  }


  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      // alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
    },
    button: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 20,
      textAlign: 'center',
    },
  });
  

  
