import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc";
import { themeColor } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartitems } from '../slices/cartSlice';
const{height,width}=Dimensions.get("window")
const CartIcon = () => {
    const navigation= useNavigation()
    const cartItems = useSelector(selectCartitems)
    const cartTotal =useSelector(selectCartTotal)
    if(!cartItems.length) return;
    return (
        <View style={{...tw`absolute z-50 bottom-1  rounded-full`,backgroundColor:themeColor.bgColor(1)}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Cart") }} >
        <View style={{...tw`flex-row justify-between  rounded-full p-3  items-center`,width:width}} >
            <Text style={{...tw`text-white font-extrabold p-3 h-10 w-10 text-center  `,borderRadius:50,backgroundColor:"rgba(255,255,255,0.2)"}}>
                3
            </Text>
            <Text style={{...tw`text-white font-extrabold text-xl`}}>
                View Cart 
            </Text>
            <Text style={{...tw`text-white text-lg mr-2 font-extrabold `}}>
                {cartTotal} Rs  
            </Text>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CartIcon;
