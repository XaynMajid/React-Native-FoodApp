import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import tw from "twrnc"
import RestaurantCard from './RestaurantCard';
import { featuredData } from '../constants/constants';
const Featured = ({ title, description,restaurants}) => {
    return (
        <View style={{...tw``}}>
            <View style={{...tw`flex-row items-center justify-between px-4`}}>
                <View>
            <Text style={tw`text-black text-2xl`}>{title}</Text>
            <Text style={tw`text-black text-sm`}>{description}</Text>
            </View>
            <View><Text style={tw`text-orange-400`}>See All</Text></View>
            </View>

       
       {/* restaurants */}
       
       <View  style={{...tw`flex-row`,}} >
       <ScrollView horizontal>

        {
           restaurants.map((item,index)=>{
              return(

                  <RestaurantCard key={index} item={item} />  
              )
            })

        }

        </ScrollView>

        </View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Featured;
