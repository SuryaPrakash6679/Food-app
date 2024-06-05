import { View, Text,StyleSheet,TextInput,Image,ScrollView,TouchableOpacity,useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyles from '../Styles/GlobalStyles';
// import { SceneMap, TabView } from 'react-native-tab-view';
import Tab from './tab';


export default function Screen3({navigation}) {
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
    <ScrollView 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
    >
       <View style={{flexDirection:'row',marginTop:53,marginLeft:10,}}>
       <View>
           <Image
              source={{ uri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png' }}
              style={{ width: 400, height:160,borderRadius:20,}}
            />
           </View>
           <View 
            //  style={{borderRadius:20, width:200, backgroundColor:'white', height:292,marginLeft:10,   shadowRadius: 4,elevation: 5}}
           >
           <Image
              source={{ uri: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-05/Swiggy.jpg' }}
              style={{ width: 400, height:160,borderRadius:20,marginLeft:20,}}
            />
           </View>
           <View 
            //  style={{borderRadius:20, width:200, backgroundColor:'white', height:292,marginLeft:10,   shadowRadius: 4,elevation: 5}}
             >
           <Image
              source={{ uri: 'https://s3.envato.com/files/273273308/01_preview.__large_preview.jpg' }}
              style={{ width: 380, height:160,borderRadius:20,marginLeft:20}}
            />
           </View>
       </View>
       </ScrollView>
    </View>  

  <View style={GlobalStyles.section1}>
    <ScrollView 
       horizontal={true}
       showsHorizontalScrollIndicator={false}>
       <View style={GlobalStyles.section1} >
       <View>
             <View style={GlobalStyles.section1_location}>
            <Text style={{ fontSize: 18, fontWeight: 'bold',textAlign:'center',paddingTop:20}}>NEAR ME</Text>
            </View>
           {/* <Image
              source={{ uri: 'https://png.pngtree.com/png-vector/20221021/ourmid/pngtree-orange-pin-map-png-image_6377500.png' }}
              style={{ width: 100, height:100,borderRadius:0,}}
            /> */}
       </View>
           <View 
             style={{borderRadius:20, width:150, backgroundColor:'white', height:150,marginLeft:10,   shadowRadius: 4,elevation: 5}}
           >
            <Text style={{ fontSize: 18, fontWeight: 'bold',textAlign:'center',paddingTop:10}}>BOOK TABLE</Text>
            {/* <Text style={{ fontSize: 18, fontWeight: 'bold',marginLeft:10}}></Text> */}
           <Image
              source={{ uri: 'https://www.kindpng.com/picc/m/111-1111236_calendar-icon-transparent-background-transparent-calendar-icon-png.png' }}
              style={{ width: 100, height:100,borderRadius:20,marginLeft:20,}}
            />
           </View>
           <View 
             style={{borderRadius:20, width:150, backgroundColor:'white', height:150,marginLeft:10,marginTop:0, shadowRadius: 4,elevation: 5}}
             >
              <Text style={{ fontSize: 18, fontWeight: 'bold',textAlign:'center',paddingTop:10}}>TOP RATED</Text>
              {/* <Text style={{ fontSize: 18, fontWeight: 'bold',marginLeft:10}}>RATED</Text> */}
             <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/617/676/small_2x/gold-star-symbol-png.png' }}
              style={{ width:100, height:100,borderRadius:20,marginLeft:30}}
             />
           </View>
           <View style={GlobalStyles.section1_popular}>
              <Text style={{ fontSize: 17, fontWeight: 'bold',textAlign:'center',paddingTop:10}}>POPULAR AREA</Text>
             <Image
              source={{ uri: 'https://pngimg.com/d/pin_PNG57.png' }}
              style={{ width:100, height:100,borderRadius:20,marginLeft:50}}
             />
           </View>
           <View 
             style={{borderRadius:20, width:150, backgroundColor:'white', height:150,marginLeft:10,   shadowRadius: 4,elevation: 5}}
             >
              <Text style={{ fontSize: 18, fontWeight: 'bold',paddingTop:10,textAlign:'center'}}>TOP CUISINES</Text>
             <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/previews/026/984/652/original/single-one-line-drawing-young-attractive-female-chef-serving-delicious-cuisine-on-restaurant-holding-and-opening-tray-cloche-modern-template-one-line-hand-drawn-illustration-minimalism-style-png.png' }}
              style={{ width:100, height:100,borderRadius:20,marginLeft:20}}
             />
           </View>
       </View>
       </ScrollView>
    </View> 
    {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={GlobalStyles.section4}>
        <Text style={GlobalStyles.section4_trend}>Trending restaurant</Text>  
        <Text style={GlobalStyles.section4_trend}>Deal of the day</Text>
        <Text style={GlobalStyles.section4_trend}>Pre-book offers</Text>
     </View> 
    </ScrollView>  */}
   <ScrollView horizontal={true}>
     <View style={{flexDirection:'row',marginTop:23,marginLeft:10,}}>
       <View style={{borderRadius:20, width:350, backgroundColor:'white', height:292,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://cache.marriott.com/content/dam/marriott-renditions/FUOSY/fuosy-chinese-restaurant-9733-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*' }}
              style={{ width: 350, height:160,borderRadius:20,}}
            />
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>Chinese.North Indian</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>Dilsukh Nagar,Hyderabad</Text>
              </View>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>$10 for two</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>13.3 km</Text>
              </View>
            </View>
            <View style={GlobalStyles.section2_green}>
            {/* <Icon name="star" size={26} color="orange" style={{marginTop:7}} /> */}
              <Text style={{ fontSize: 16, fontWeight: 'bold',marginLeft:10,color:'white'}}>Flat 25% on pre-booking</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold',marginLeft:10,color:'white'}}>+2 more</Text>
            </View>
           </View>
           <View style={{borderRadius:20, width:350, backgroundColor:'white', height:292,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://thearchitectsdiary.com/wp-content/uploads/2018/06/Best-Restaurant-Interior-Design-In-India-3.jpg' }}
              style={{ width: 350, height:160,borderRadius:20,}}
            />
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>North Indian.Beverages</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>jubilee Hills,Hyderabad</Text>
              </View>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>$13 for two</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>10.3 km</Text>
              </View>
            </View>
            <View style={GlobalStyles.section3_green}>
            {/* <Icon name="star" size={26} color="orange" style={{marginTop:7}} /> */}
              <Text style={{ fontSize: 16, fontWeight: 'bold',marginLeft:10,color:'white'}}>Flat 15% off partner offers</Text>
            </View>
           </View>
           
           <View style={{borderRadius:20, width:350, backgroundColor:'white', height:292,marginLeft:10,   shadowRadius: 4,elevation: 5}}>
           <Image
              source={{ uri: 'https://m.media-amazon.com/images/I/71tv2ypRRnL.jpg' }}
              style={{ width: 350, height:160,borderRadius:20,}}
            />
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>Mughlai.North Indian</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>Masab Tank,Hyderabad</Text>
              </View>
              <View>
               <Text style={{marginLeft:'10',marginLeft:10}}>$4 for two</Text>
               <Text style={{  marginLeft:10,marginLeft:10,color:'grey' }}>8.3 km</Text>
              </View>
            </View>
            <View style={GlobalStyles.section2_green}>
            {/* <Icon name="star" size={26} color="orange" style={{marginTop:7}} /> */}
              <Text style={{ fontSize: 16, fontWeight: 'bold',marginLeft:10,color:'white'}}>Flat 50% off pre-booking</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold',marginLeft:10,color:'white'}}>+7 more</Text>
            </View>
           </View>
       </View>
     </ScrollView>
     <View>
        <Tab navigation={navigation}/>
      </View>
       </ScrollView>
</View>
  );
}

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
    // flex: 0.3,
    marginVertical: 20,
    // borderRadius: 2,
    // padding:20,
  },
  foodItem: {
    padding: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 16,
    textAlign: 'center',
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

 
});

