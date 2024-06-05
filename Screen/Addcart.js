import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
const Payment = () => {
    const navigation=useNavigation();
    const [upi, setUpi] = useState('');
    const [selectedUPI, setSelectedUPI] = useState(null);
    // const [selectedPayment, setSelectedPayment] = useState(null);  
    const [CompanyValue, setCompanyValue] = useState(null);        

   


    const companies = [
        { label: "Credit Card", value: 0 },
        { label: "Debit Card", value: 1 },
        { label: "Gift Card", value: 2 },
        { label: "Net Banking", value: 3 },
    ];

    const handleProceedPayment = () => {
        if (upi.length > 1 || selectedUPI || CompanyValue !== null) {
            // navigation.navigate("Paymentsuccess");
        } else {
            alert("please select any one of the payment option");
        }
    }

  return (
    <View style={styles.container}>
    <View style={styles.container1}>
        <View style={styles.header}>
            <Feather name="arrow-left" color="black" size={30} onPress={()=>navigation.navigate("Screen2")}/>
            <Text style={styles.headerText}>Choose payment mode</Text>
        </View>
        <View style={styles.headerOne}>
            <Text style={styles.headerOneText}>Charges for delivery</Text>
            <View style={styles.amount}>
                {/* <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ\/ebuzz/assets/rupee-indian.png')} style={styles.icon1}/> */}
                <Text style={styles.amount1}>100</Text>
            </View>
        </View>
        <View style={styles.headerOneLine}></View>
        <View style={styles.PaymentIcon}>
            <Image source={{uri:"https://png.pngtree.com/png-clipart/20230105/original/pngtree-green-check-mark-png-image_8873320.png"}} style={styles.icon2}/>
            <Text style={styles.UpiText}>UPI payment</Text>
        </View>
        <View style={styles.UPIid}> 
            <TextInput placeholder='Please enter UPI id for the payment' onChangeText={(text)=>setUpi(text)}></TextInput>
        </View>
        
        <View style={styles.otherPayments}>
        <RadioForm
           radio_props={companies}
            initial={CompanyValue}
            onPress={value => setCompanyValue(value)} style={styles.otherPaymentsin}/>
        </View>
        <View style={styles.UPIicons}>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('PhonePe')}>
                <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-phonepe-2709167-2249157.png?f=webp'}} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'PhonePe' ? 'red' :'white' }}>PhonePe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('GooglePay')}>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntC1WEoxzxeeX1D_zX3kcPLwPb0crInfcDhc6Yis7hA&s'}} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'GooglePay' ? 'red' : 'white' }}>Google pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('Paytm')}>
                <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png'}} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'Paytm' ? 'red' : 'white', }}>Paytm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('BHIM')}>
                <Image source={{uri:'https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP'}} style={styles.icon2}/>
                <Text style={{ color: selectedUPI === 'BHIM' ? 'red' : 'white' }}>BHIM</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.paymentButton} onPress={handleProceedPayment}>
            <Text style={styles.paymentButtonbottom}>Proceed to pay</Text>
        </TouchableOpacity>
    </View>
     </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgrey",
        width:"100%"
    },
    container1:{
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"",
        elevation:4,
        width:"90%",
        paddingTop:"5%",
        paddingBottom:"8%",
        borderRadius:5
    },
    header:{
        width:"100%",
        flexDirection:"row",
        gap:20,
        alignItems:"center",
        paddingHorizontal:"2%",
        paddingVertical:"2%"
    },
    headerText:{
        fontSize:18,
        fontWeight:"500",
        color:'white'
    },
    headerOne:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        paddingHorizontal:"4%"
    },
    amount:{
        flexDirection:"row",
        alignItems:"center"
    },
    icon1:{
        height:50,
        width:35,
        resizeMode:'contain'
    },
    amount1:{
        fontSize:40,
        fontWeight:"900"
    },
    headerOneText:{
        fontSize:16,
        color:'white'

    },
    headerOneLine:{
        height:6,
        backgroundColor:"lightgrey",
        width:"100%",
        marginVertical:"3%"
    },
    PaymentIcon:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        width:"100%",
        paddingHorizontal:"5%",
        gap:10
    },
    icon2:{
        height:50,
        width:35,
        resizeMode:'contain'
    },
    UpiText:{
        fontSize:16,
        fontWeight:"500",
        color:'white'
    },
    UPIid:{
        borderBottomWidth:1,
        width:"90%",
    },
    UPIicons:{
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between",
        paddingVertical:"5%",
    },
    UPIicon:{
        alignItems:"center"
    },
    paymentButton:{
        alignItems:"center",
        paddingVertical:"5%",
        backgroundColor:'orange',
        width:"90%",
        borderRadius:5,
        marginTop:"5%"
    },
    otherPayments:{
        alignItems:"flex-start",
        width:"85%",
        paddingVertical:"5%"
    },
    otherPaymentsin:{
        gap:20,
        color:'white'
    },
    paymentButtonbottom:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    }
})
//
//  import { StyleSheet, Text, View ,Image, TextInput,TouchableOpacity} from 'react-native'
// import React from 'react'
// import Feather from 'react-native-vector-icons/Feather';
// import { useState } from 'react';
// import RadioForm from 'react-native-simple-radio-button';
// import { useNavigation } from '@react-navigation/native';
// const Payment = () => {
//     const navigation=useNavigation();
//     const [upi, setUpi] = useState('');
//     const [selectedUPI, setSelectedUPI] = useState(null);
//     // const [selectedPayment, setSelectedPayment] = useState(null);
//     const [CompanyValue, setCompanyValue] = useState(null);

   


//     const companies = [
//         { label: "Credit Card", value: 0 },
//         { label: "Debit Card", value: 1 },
//         { label: "Gift Card", value: 2 },
//         { label: "Net Banking", value: 3 },
//     ];

//     const handleProceedPayment = () => {
//         if (upi.length > 1 || selectedUPI || CompanyValue !== null) {
//             navigation.navigate("psuccess");
//         } else {
//             alert("please select any one of the payment option");
//         }
//     }

//   return (
//     <View style={styles.container}>
//     <View style={styles.container1}>
//         <View style={styles.header}>
//             <Feather name="arrow-left" color="black" size={30} onPress={()=>navigation.navigate("Login")}/>
//             <Text style={styles.headerText}>Choose payment mode</Text>
//         </View>
//         <View style={styles.headerOne}>
//             <Text style={styles.headerOneText}>Charges for reservation</Text>
//             <View style={styles.amount}>
//                 {/* <Image source={require('C:/Users/91917/OneDrive/Desktop/ReactNativ\/ebuzz/assets/rupee-indian.png')} style={styles.icon1}/> */}
//                 <Text style={styles.amount1}>2000</Text>
//             </View>
//         </View>
//         <View style={styles.headerOneLine}></View>
//         <View style={styles.PaymentIcon}>
//             <Image source={{uri:"https://png.pngtree.com/png-clipart/20230105/original/pngtree-green-check-mark-png-image_8873320.png"}} style={styles.icon2}/>
//             <Text style={styles.UpiText}>UPI payment</Text>
//         </View>
//         <View style={styles.UPIid}> 
//             <TextInput placeholder='Please enter UPI id for the payment' onChangeText={(text)=>setUpi(text)}></TextInput>
//         </View>
        
//         <View style={styles.otherPayments}>
//         <RadioForm
//            radio_props={companies}
//             initial={CompanyValue}
//             onPress={value => setCompanyValue(value)} style={styles.otherPaymentsin}/>
//         </View>
//         <View style={styles.UPIicons}>
//             <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('PhonePe')}>
//                 <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-phonepe-2709167-2249157.png?f=webp'}} style={styles.icon2}/>
//                 <Text style={{ color: selectedUPI === 'PhonePe' ? 'red' :'white' }}>PhonePe</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('GooglePay')}>
//                 <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntC1WEoxzxeeX1D_zX3kcPLwPb0crInfcDhc6Yis7hA&s'}} style={styles.icon2}/>
//                 <Text style={{ color: selectedUPI === 'GooglePay' ? 'red' : 'white' }}>Google pay</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('Paytm')}>
//                 <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png'}} style={styles.icon2}/>
//                 <Text style={{ color: selectedUPI === 'Paytm' ? 'red' : 'white', }}>Paytm</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.UPIicon} onPress={() => setSelectedUPI('BHIM')}>
//                 <Image source={{uri:'https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP'}} style={styles.icon2}/>
//                 <Text style={{ color: selectedUPI === 'BHIM' ? 'red' : 'white' }}>BHIM</Text>
//             </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.paymentButton} onPress={handleProceedPayment}>
//             <Text style={styles.paymentButtonbottom}>Proceed to pay</Text>
//         </TouchableOpacity>
//     </View>
//      </View>
//   )
// }

// export default Payment

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"lightgrey",
//         width:"100%"
//     },
//     container1:{
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"rgb(1,180,234)",
//         elevation:4,
//         width:"90%",
//         paddingTop:"5%",
//         paddingBottom:"8%",
//         borderRadius:5
//     },
//     header:{
//         width:"100%",
//         flexDirection:"row",
//         gap:20,
//         alignItems:"center",
//         paddingHorizontal:"2%",
//         paddingVertical:"2%"
//     },
//     headerText:{
//         fontSize:18,
//         fontWeight:"500",
//         color:'white'
//     },
//     headerOne:{
//         flexDirection:"row",
//         justifyContent:"space-between",
//         alignItems:"center",
//         width:"100%",
//         paddingHorizontal:"4%"
//     },
//     amount:{
//         flexDirection:"row",
//         alignItems:"center"
//     },
//     icon1:{
//         height:50,
//         width:35,
//         resizeMode:'contain'
//     },
//     amount1:{
//         fontSize:40,
//         fontWeight:"900"
//     },
//     headerOneText:{
//         fontSize:16,
//         color:'white'

//     },
//     headerOneLine:{
//         height:6,
//         backgroundColor:"lightgrey",
//         width:"100%",
//         marginVertical:"3%"
//     },
//     PaymentIcon:{
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"flex-start",
//         width:"100%",
//         paddingHorizontal:"5%",
//         gap:10
//     },
//     icon2:{
//         height:50,
//         width:35,
//         resizeMode:'contain'
//     },
//     UpiText:{
//         fontSize:16,
//         fontWeight:"500",
//         color:'white'
//     },
//     UPIid:{
//         borderBottomWidth:1,
//         width:"90%",
//     },
//     UPIicons:{
//         flexDirection:"row",
//         width:"90%",
//         justifyContent:"space-between",
//         paddingVertical:"5%",
//     },
//     UPIicon:{
//         alignItems:"center"
//     },
//     paymentButton:{
//         alignItems:"center",
//         paddingVertical:"5%",
//         backgroundColor:"rgb(0,140,60)",
//         width:"90%",
//         borderRadius:5,
//         marginTop:"5%"
//     },
//     otherPayments:{
//         alignItems:"flex-start",
//         width:"85%",
//         paddingVertical:"5%"
//     },
//     otherPaymentsin:{
//         gap:20,
//         color:'white'
//     },
//     paymentButtonbottom:{
//         color:"#fff",
//         fontWeight:"bold",
//         fontSize:18
//     }
// })