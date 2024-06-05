import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image,TextInput,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tab from './tab';
import { ScreenWidth } from 'react-native-elements/dist/helpers';


const Screen2 = ({navigation}) => {
  const foodItems = [
    { id: '1', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png' },
    { id: '2', image: 'https://www.grabon.in/indulge/wp-content/uploads/2021/03/Swiggy-Coupons-Deals.jpg' },
    { id: '3', image: 'https://www.grabon.in/indulge/wp-content/uploads/2021/03/Swiggy-Coupons-Deals.jpg' },
    { id: '4', image: 'https://www.grabon.in/indulge/wp-content/uploads/2021/03/Swiggy-Coupons-Deals.jpg' }
    ];
  const windowWidth = Dimensions.get('window').width;
  // const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     const nextIndex = (currentIndex + 1) % foodItems.length;
  //     flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
  //     setCurrentIndex(nextIndex); // updates the state variable currentIndex to nextIndex, ensuring that the loop continues with the correct index.
  //   }, 2000); // Adjust the interval as needed

  //   return () => clearInterval(scrollInterval);
  // }, [currentIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View>
      <Image source style={styles.foodName}>{item.foodItem}</Image>
      </View>
    );
  };

  return (
   <View style={styles.main}>
    <ScrollView>
    <View style={styles.inputtextbox}>
      <TextInput style={styles.inputtext}
        // value={Number}
        placeholder="Search for food"
        placeholderTextColor="gray"
        // onChangeText={Search}
      />
      <Icon name="search" size={29} color="gray" style={styles.searchicon} 
        // onPress={()=> navigation.navigate('page4')}
      />
    </View>
    <View style={styles.container}>
      <FlatList
        // ref={flatListRef}
        horizontal
        data={[...foodItems]} // Extend the list for seamless looping
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={foodItems.length} // Start at the first "real" item
        // getItemLayout={(data, index) => ({
        //   length: windowWidth, // Use window width for each item
        //   offset: windowWidth * index,
        //   index,
        // })}
        scrollEnabled
        pagingEnabled
      />

      <View style={styles.dotContainer}>
        {foodItems.map((item, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.activehole]} />
        ))}
      </View>
    
      
      <View style={styles.menu_1}>
        <View>
        <Image style={styles.offerbox}
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20221125/ourmid/pngtree-cardboard-open-box-packaging-mockup-png-image_6479777.png',
        }}
        />
        </View>
        {/* <View style={styles.sub_class1}   
        onPress={()=> navigation.navigate('page4')}>
        <Text style={styles.offer_text}>OFFER ZONE</Text>
        <Text style={styles.offertext_2}>Up to 60% off and more</Text>
       
        </View> */}
        <TouchableOpacity style={styles.sub_class1}
        //  onPress={() => navigation.navigate('page4')}
         >
          <Text style={styles.offer_text}>OFFER ZONE for suryabhai</Text>
          <Text style={styles.offertext_2}>Up to 60% off and more</Text>
        </TouchableOpacity>

     </View>
   </View>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     
       <View style={{flexDirection:'row',marginTop:23,marginLeft:10,}}>
       <TouchableOpacity  style={styles.sub_class1} onPress={() => navigation.navigate('page4')}>
       <View style={{borderRadius:20, width:200, backgroundColor:'white', height:272,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/1641709639/display_1500/stock-photo-kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala-1641709639.jpg' }}
              style={{ width: 200, height:160,borderRadius:20,}}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold',marginLeft:10, }}>Sri Karthikeya Gr....</Text>
            <View style={{flexDirection:'row',marginLeft:10,}}>
            <Icon name="star" size={26} color="orange" style={{marginTop:7}} />
            <Text style={{ fontSize: 20, fontWeight: 'bold',marginLeft:10,marginTop:7}}>5.0 </Text>
            <Text style={{  marginLeft:'10',marginLeft:10,marginTop:12}}>35-40 mins</Text>
            {/* <Icon name="heart" size={26} color="orange" style={{marginTop:7,marginLeft:88}} /> */}
            </View>
            <Text style={{marginLeft:10,marginTop:7}}>South Indian, Beverages,...</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.sub_class1} onPress={() => navigation.navigate('page4')}>
           <View style={{borderRadius:20, width:200, backgroundColor:'white', height:272,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg' }}
              style={{ width: 200, height:160,borderRadius:20,}}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold',marginLeft:10, }}>Sri Bilaji Mithai B....</Text>
            <View style={{flexDirection:'row',marginLeft:10,}}>
            <Icon name="star" size={26} color="orange" style={{marginTop:7}} />
            <Text style={{ fontSize: 20, fontWeight: 'bold',marginLeft:10,marginTop:7}}>4.4</Text>
            <Text style={{ marginLeft:10,marginTop:12}}>30-35 mins</Text>
            {/* <Icon name="heart" size={26} color="orange" style={{marginTop:7,marginLeft:88}} /> */}
            </View>
            <Text style={{marginLeft:15,marginTop:7}}>Sweets</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.sub_class1} onPress={() => navigation.navigate('page4')}>
           <View style={{borderRadius:20, width:200, backgroundColor:'white', height:272,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?cs=srgb&dl=pexels-rama-khandkar-2113556.jpg&fm=jpg' }}
              style={{ width: 200, height:160,borderRadius:20,}}
            />
            <Text style={{ fontSize: 21, fontWeight: 'bold',marginLeft:10, }}>Sri Surya Tiffins </Text>
            <View style={{flexDirection:'row',marginLeft:10,}}>
            <Icon name="star" size={26} color="orange" style={{marginTop:7}} />
            <Text style={{ fontSize: 20, fontWeight: 'bold',marginLeft:10,marginTop:7}}>5.0</Text>
            <Text style={{marginLeft:10,marginTop:11}}>29-31 mins</Text>
            {/* <Icon name="heart" size={26} color="orange" style={{marginTop:7,marginLeft:88}} /> */}
            </View>
            <Text style={{marginLeft:15,marginTop:7}}>Break Fast</Text>
           </View>
           </TouchableOpacity>
       </View>
       
       </ScrollView>
       </ScrollView>
</View>
  );
};


const styles = StyleSheet.create({
  inputtextbox:{
    flexDirection:'row',
    justifyContent:'space-evenly',
//  position:'relative',
  },
  inputtext:{
    // height: 40,
    width:380,
    marginTop:62,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    backgroundColor:'#F0F0F9',
   
  },
  searchicon:{
    position:'absolute',
    paddingTop:73,
    paddingLeft:330,
          
  },
  container: {
    flex: 0.3,
    // marginVertical: 30,
    width: 430,
    height:340,
    padding:20,
  },
  foodItem: {
    flexDirection:'row',
    padding: 65,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // marginLeft: 20,
  },
  foodName: {
     height:200,
     width:160,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activehole: {
    backgroundColor: 'black',
  },
  menu_1:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-evenly',
     marginLeft:20,
     marginTop:10,
     borderWidth:1,alignItems:'center',
     width:360,
      // elevation: 2,
      shadowOpacity: 0.5,
      borderRadius:10,
  },
  sub_class1:{
   
     padding:10,
    //  color:'grey',
   
  },
  offerbox:{
    width:70,
    height:40
  },
  offer_text:{
    fontWeight:'bold',
    color:'gray',
  },
  offertext_2:{

    // color:'grey',
  },
 
});

export default Screen2;
