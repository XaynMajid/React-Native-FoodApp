import React from 'react';
import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"
import MapView, { Marker } from 'react-native-maps';
import { featuredData } from '../constants/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';   
import EntypoIcons from 'react-native-vector-icons/Entypo';   
import { themeColor } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart, removeFromCart } from '../slices/cartSlice';
const {height,width}=Dimensions.get("window")
const DeliveryScreen = () => {
    const restaurants = useSelector(selectRestaurant)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const cancelOrder =()=>{
        navigation.navigate("Home")  
        dispatch(emptyCart())
    }
    return (
        <View style={{...tw`flex-1 relative`}}>
            {/* <MapView 
            
            initialRegion={{
latitude:restaurants.lat,
longitude:restaurants.lng,
latitudeDelta:0.01,
longitudeDelta:0.01,
            }}
            mapType='standard'
            style={{...tw`flex-1`}}
            
            >

<Marker 
coordinate={{
latitude:restaurants.lat,
longitude:restaurants.lng
}}

/>

                
            </MapView> */}
<View style={{...tw`absolute bg-white   z-20 p-6 rounded-xl items-center`,top:height*0.4,left:width*0.3 }}>
<Text style={{...tw`bold text-lg font-extrabold text-black `}}>{restaurants.name}</Text>
<Text style={{...tw`bold text-sm text-black text-gray-500`}}>{restaurants.description}</Text>
</View>


<View>
    <Image  source={require("../assets/map.jpg")} style={{...tw` `,height:height*0.7,width:width}} />
</View>

<View style={{...tw` rounded-t-3xl bg-white mt--5 flex-1`}}>
<View style={{...tw`flex-row justify-between mt-10 mb-6 mx-5 items-center`}}>
<View style={{...tw``}}>
    <Text  style={{...tw`bold text-lg font-extrabold text-gray-600 `}}>Estimated Arrival</Text>
    <Text style={{...tw`bold text-3xl text-black`}}>20 - 30 Minutes</Text>
    <Text style={{...tw`bold text-sm text-black text-gray-500`}}>Your Order is own its way!</Text>

</View>
<View>
    <Image source={require("../assets/rider.png")} style={{...tw`h-25 w-25`}}  />
</View>
</View>

<View style={{...tw` rounded-full flex-row gap-4   rounded-full p-2  items-center mx-3  relative `,backgroundColor:themeColor.bgColor(1)}}>
           <View>
            <Image source={require("../assets/person.jpg")} style={{...tw`h-18 w-18 rounded-full`}}  />
           </View>
           <View>
           <Text  style={{...tw`bold text-xl bold font-extrabold text-white `}}>Zain Majid</Text>
           <Text style={{...tw`bold text-md bold font-extrabold text-white `}}>Your Rider</Text>
           </View>
          <View style={{...tw`flex-row gap-2 absolute right-5`}}>
            <TouchableOpacity>
            <Ionicons name={"call"} size={35} style={{...tw`bg-white rounded-full p-1 `,color:themeColor.bgColor(1)}} />

            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder}>
            <EntypoIcons name={"cross"} size={35} style={{...tw`bg-white rounded-full text-red-600 p-1`}} />
            </TouchableOpacity>
          </View>

        </View>

</View>


        </View>
    );
}

const styles = StyleSheet.create({})

export default DeliveryScreen;
