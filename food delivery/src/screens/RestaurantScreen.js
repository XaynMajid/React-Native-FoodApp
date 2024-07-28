import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Feather from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { themeColor } from "../themes";
import Dishes from "../components/Dishes";
import CartIcon from "../components/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

const { height, width } = Dimensions.get("window");
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  const Dispatch = useDispatch()

// const Selector= useSelector()
  useEffect(() => {
    if(item && item.id){
      Dispatch(setRestaurant({...item}))
    }
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <CartIcon />
      <View style={{ ...tw`relative` }}>
        <StatusBar
          backgroundColor={"black"}
          barStyle="light-content"
          style={{ ...tw`text-white` }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ ...tw`absolute top-8 left-5 z-1` }}
        >
          <Feather
            name={"arrow-left-circle"}
            size={50}
            style={{
              ...tw` rounded-full bg-white `,
              color: themeColor.bgColor(1),
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/restaurants/papaJohns.jpg")}
          style={{ ...tw`h-72 w-full` }}
        />
      </View>
      <View
        style={{
          ...tw`-mt-10 pt-4 bg-white pb-10`,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={{ ...tw`bg-white  mt-4  ` }}>
          <Text style={{ ...tw`text-black text-3xl ml-3 ` }}>{item.name}</Text>
          <View style={{...tw`flex-row mx-2`}}>
            <View style={{ ...tw`flex-row items-center ` }}>
              <AntDesignIcon
                name={"star"}
                size={15}
                style={{ ...tw`text-yellow-300 mx-2 my-2` }}
              />
              <Text style={{ ...tw`text-gray-600 ` }}>{item.stars} </Text>
              <Text style={{ ...tw`text-gray-600` }}>(4.4k Review) </Text>
              <Text style={{ ...tw`text-gray-600 mx-1` }}>
                {item.category}
              </Text>
            </View>
            <View style={{ ...tw`flex-row items-center ` }}>
              <EntypoIcon
                name="location-pin"
                size={20}
                style={{ ...tw`text-orange-300 m-1 ` }}
              />
              <Text style={{ ...tw`text-gray-600` }}>
                Nearby. {item.address}
              </Text>
            </View>
          </View>
        <Text style={{...tw`text-gray-600 ml-4`}}>{item.description}</Text>
        </View>
<View>
      <View style={{...tw`bg-white`}}>
        <Text style={{...tw`text-black text-3xl mx-5 `}}>Menu</Text>
        {
            item.dishes.map((item,index)=>{
                return(
                    <Dishes  key={index} item={item} />
                )  
            })    
        }
        </View>
      </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default RestaurantScreen;
