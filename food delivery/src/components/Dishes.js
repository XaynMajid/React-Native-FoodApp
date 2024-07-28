import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"
import AntDesignIcons from 'react-native-vector-icons/AntDesign'; 
import { themeColor } from '../themes';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartitemsById } from '../slices/cartSlice';
const Dishes = ({item}) => {
  const dispatch =useDispatch()
  const totalItems =useSelector(state=>selectCartitemsById(state,item.id))
  const handleIncrease =()=>{
   dispatch(addToCart({...item}))
    // console.log("hi");
}
const handleDecrease =()=>{
  dispatch(removeFromCart({id:item.id}))
}

    return (
        <View style={{...tw`my-3 mx-3 bg-gray-50 rounded-2xl p-1 flex-row`}}>
          <View>
           <Image source={require("../assets/dishes/pizza.jpeg")} style={{...tw`h-20 w-20 rounded-3xl m-2`}}  />
           </View>
           <View>
           <Text style={{...tw`text-black  text-2xl  mx-2`}}>{item.name}</Text>
           <Text style={{...tw`text-gray-500    mx-2`}}>{item.description}</Text>
         <View style={{...tw`flex-row  items-center justify-between w-60`}}>
            <View style={{...tw`text-black font-extrabold my-3`}}>
           <Text style={{...tw`text-black  text-2xl  mx-2`}}>{item.price} Rs</Text>
           </View>
           <View style={{...tw`flex-row  items-center mx-2 `}} >
            <TouchableOpacity onPress={handleDecrease}>
<AntDesignIcons name="minuscircle"  size={25} style={{...tw` `,color:themeColor.bgColor(1)}}  />
</TouchableOpacity>
<Text style={{...tw`mx-1 text-black`}}>{totalItems.length}</Text>
<TouchableOpacity onPress={handleIncrease}>
<AntDesignIcons name="pluscircle"  size={25} style={{...tw` `,color:themeColor.bgColor(1)}} />
</TouchableOpacity>
</View>
           </View>
           </View>
        </View>
        
    );
}

const styles = StyleSheet.create({})

export default Dishes;
