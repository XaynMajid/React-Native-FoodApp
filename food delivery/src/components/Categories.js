import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories } from "../constants/constants";
import tw from "twrnc";

const Categories = () => {
  const [ActiveColor, setActiveColor] = useState(null);
  return (
    <View style={{ ...tw`mt-2 ` }}>
      <ScrollView horizontal>
        {categories.map((item, index) => {
          let isActive = item.id == ActiveColor;
          let text = isActive ? "text-black font-bold" : "text-gray-500";
          let btn = isActive ? "bg-orange-400" : "bg-orange-300 ";

          return (
            <View key={index}>
              <TouchableOpacity
                style={{
                  ...(tw`border-slate-300 mx-4 bg-gray-300 p-1 rounded-full ${btn}` 
                    ),
                }}
                onPress={() => setActiveColor(item.id)}
              >
                <Image
                  source={item.image}
                  style={{ ...tw`mx-auto`, height: 50, width: 50 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...tw`text-center mt-1 text-lg  ${text}`,
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
