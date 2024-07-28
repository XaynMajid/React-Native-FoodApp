import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import { themeColor } from "../themes";
import { ThemeProvider, useNavigation } from "@react-navigation/native";
import { featuredData } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { removeFromCart, selectCartTotal, selectCartitems } from "../slices/cartSlice";
const { height, width } = Dimensions.get("window");
const CartScreen = () => {
  const navigation = useNavigation();
  // const restaurantsData= featuredData[0].restaurants[0]
  const restaurant = useSelector(selectRestaurant);
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartitems);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch()
  useEffect(() => {
   const items= cartItems.reduce((group, item) => {
      if (group[item.id]) { // here it is using [item.id] as an index ,that whether this index of group is exists or not if it is not then insert the item at this index if it does than 
         // it is matching whether the item with same id is already exist in a group object or not
        group[item.id].push(item); // if it is exist then push the same id items in an array
      } else {
        group[item.id] = [item]; // else create a new array with this id remeber item is in braces [item]
        //{
        //   1: [{ id: 1, name: 'Item A' }, { id: 1, name: 'Item C' }],
        //   2: [{ id: 2, name: 'Item B' }]
        // }         eg data will be stored like this
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  console.log(groupedItems);
  return (
    <ScrollView>
      <View style={{ ...tw`  flex-1 justify-between` }}>
        <View
          style={{
            ...tw`bg-white  `,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View style={{ ...tw`flex-row items-center  mt-4` }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name="arrow-back-circle"
                size={50}
                style={{ ...tw` ml-3`, color: themeColor.bgColor(1) }}
              />
            </TouchableOpacity>
            <View style={{ ...tw`mx-25 mt-3 ` }}>
              <Text style={{ color: "black", ...tw`text-3xl bold` }}>
                Your Cart
              </Text>
              <Text style={{ ...tw`text-center text-gray-600` }}>
                {restaurant.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...tw`mt-5 flex-row items-center justify-between p-5 rounded-3xl mx-3 `,
              backgroundColor: themeColor.bgColor(0.3),
            }}
          >
            <Image
              source={require("../assets/rider.png")}
              style={{ ...tw`h-20 w-20` }}
            />
            <Text style={{ color: "black", ...tw`font-semibold text-sm` }}>
              Delivery in 20-30 minutes
            </Text>
            <Text style={{ color: themeColor.bgColor(1), ...tw`text-xl` }}>
              Change
            </Text>
          </View>

          {/* dishes */}
          <View
            style={{
              ...tw` mb-4 `,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <ScrollView style={{ ...tw }}>
              {Object.entries(groupedItems).map(([key, items]) => {  // this will return us the array of arrays which contain the key value pairs and in each pair key will be the id and the value will be the list of items with that id
               let dish=items[0]
               return (
                  <View
                    key={key}
                    style={{
                      ...tw`flex-row justify-between bg-gray-50 mb-5 rounded-3xl mx-3 mt-5`,
                    }}
                  >
                    <View style={{ ...tw`flex-row items-center mx-4 my-3` }}>
                      <Text 
                        style={{
                          ...tw`text-black `,
                          color: themeColor.bgColor(1),
                        }}
                      >
                        {items.length} X
                      </Text>
                      <Image
                        source={require("../assets/dishes/pizza.jpeg")}
                        style={{ ...tw`h-20 w-20 rounded-full mx-3` }}
                      />
                      <Text style={{ ...tw`text-black `, color: "black" }}>
                        {dish.name}
                      </Text>
                    </View>
                    <View style={{ ...tw`my-auto px-8 flex-row ` }}>
                      <Text style={{ color: "black", ...tw`px-2` }}>
                        {dish.price}
                      </Text>
                      <TouchableOpacity onPress={()=>dispatch(removeFromCart({id:dish.id}))}>
                        <AntDesignIcons
                          name="minuscircle"
                          size={25}
                          style={{ ...tw` `, color: themeColor.bgColor(1) }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            ...tw`  rounded-t-2xl   mx-2 mt-2 flex-1`,
            backgroundColor: themeColor.bgColor(0.2),
          }}
        >
          <View
            style={{ ...tw`flex-row w-90 justify-between  w-full px-5 py-3` }}
          >
            <Text style={{ ...tw`text-gray-600    ` }}>Subtotal</Text>
            <Text style={{ ...tw`text-gray-600  ` }}>{cartTotal} Rs</Text>
          </View>
          <View
            style={{ ...tw`flex-row w-90 justify-between  w-full px-5 py-3` }}
          >
            <Text style={{ ...tw`text-gray-600    ` }}>Delivery Fee</Text>
            <Text style={{ ...tw`text-gray-600  ` }}>300</Text>
          </View>
          <View
            style={{ ...tw`flex-row w-90  justify-between  w-full px-5 py-3` }}
          >
            <Text style={{ ...tw`text-gray-600    ` }}>Original</Text>
            <Text style={{ ...tw`text-gray-600  ` }}>{cartTotal+300} Rs</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OrderLoading");
            }}
          >
            <View
              style={{
                ...tw` rounded-full flex-row justify-center   rounded-full p-4  items-center mx-3 my-2 `,
                backgroundColor: themeColor.bgColor(1),
              }}
            >
              <Text style={{ ...tw`text-white font-extrabold text-xl` }}>
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
