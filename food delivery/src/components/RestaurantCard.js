import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from "twrnc"
import AntDesignIcon from 'react-native-vector-icons/AntDesign';  
const {height,width}=Dimensions.get("window")
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {
    const navigation =useNavigation()
    return (
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("Restaurant",{...item})   }>
        <View style={{...tw`p-3 my-1 `}}>
        <View style={{backgroundColor:"white",...tw`text-black shadow-lg rounded-t-3xl rounded-b-lg `}}>
            <Image  source={item.image}  style={{height:height*0.23,width:width*0.8,...tw`  rounded-t-3xl`}}   />
        <Text style={{backgroundColor:"white",...tw`text-black mt-2 ml-3 text-2xl`}}>{item.name}</Text>
       <View style={{...tw`flex-row items-center `}}>
        <AntDesignIcon name={"star"}  size={15} style={{...tw`text-yellow-300 mx-2 my-2`}} />
        <Text style={{...tw`text-gray-600 `}}>{item.stars} </Text>
        <Text style={{...tw`text-gray-600`}}>(4.4k Review) </Text>
        <Text style={{...tw`text-gray-600 mx-1`}}>{item.category} </Text>
        </View>
        <View style={{...tw`flex-row items-center `}}>
    <EntypoIcon name="location-pin" size={20} style={{...tw`text-orange-300 m-1 `}} />
<Text style={{...tw`text-gray-600`}}>Nearby. {item.address} </Text>
        </View>
        </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({})

export default RestaurantCard;

