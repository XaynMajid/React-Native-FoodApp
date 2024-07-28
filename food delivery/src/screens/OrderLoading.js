import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View ,style} from 'react-native';
import tw from "twrnc"
import { themeColor } from '../themes';
import { useNavigation } from '@react-navigation/native';
const {height,width}=Dimensions.get("window")
const OrderLoading = () => {
    const navigation =useNavigation()
    useEffect(() => {
        setTimeout(() => {
           navigation.navigate("Delivery") 
        },1000);
    }, []);
    
    
    return (



        <View  style={{...tw` flex-1 items-center justify-center`,backgroundColor:themeColor.bgColor(0.9)}}>
            <Image source={require("../assets/deliver-man.png")} style={{...tw``,width:width*0.9,height:height*0.5}} />
        </View>
    );
}


export default OrderLoading;
