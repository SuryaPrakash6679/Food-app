import { StyleSheet } from "react-native";
const GlobalStyles = StyleSheet.create({
    section1:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    section1_location:{
        borderRadius:20, 
        width:150, 
        backgroundColor:'white', 
        height:150,
        marginLeft:10,
        shadowRadius: 4,
        elevation: 5,
        textAlign:'center'
    },
    section1_popular:{
        borderRadius:20, 
        width:150,
        backgroundColor:'white',
        height:150,
        marginLeft:10,
        shadowRadius: 4,
        elevation: 5
    },
    section1_cuisines:{
        borderRadius:20,
        width:200,
        backgroundColor:'white',
        height:292,
        marginLeft:10,
        shadowRadius: 4,
        elevation: 5
    },
    section2_green:{
        flexDirection:'row',
        width:330,
        backgroundColor:'green',
        justifyContent:'space-evenly',
        padding:10,
        borderRadius:10,
        marginLeft:10,
    },
    section3_green:{
        flexDirection:'row',
        width:330,
        backgroundColor:'lightgreen',
        justifyContent:'space-evenly',
        padding:10,
        borderRadius:10,
        marginLeft:10,
    },
    section4:{
        flexDirection:'row',
    },
    section4_trend:{
        marginTop:20,
        marginLeft:20,
        width:150,
        borderWidth:1,
        padding:5,
        borderRadius:10,
    },
    section4_deal:{
        marginTop:20,
        marginLeft:20,
        width:120,
        borderWidth:1,
        padding:5,
        borderRadius:10,
    },
    section4_prebook:{
        marginTop:20,
        marginLeft:20,
        width:120,
        borderWidth:1,
        padding:5,
        borderRadius:10,
    },
    tab1_Text:{
        borderWidth:1,
        borderRadius:10,
        padding:5,
        // borderColor:'black', 
       },
    searchnavigation_section1:{
       margin:30,
       flexDirection:'row',
       justifyContent:'space-between',
    //    marginTop:30,
       },
    searchnavigation_subsection1:{
       marginTop:30    
       },
    searchnavigation_hrline:{
        borderBottomWidth:1,
        width:410,
        marginLeft:20,
    },      
    searchnavigation_button:{
        position:'absolute',
        margin:100
    },
});
 export default GlobalStyles;