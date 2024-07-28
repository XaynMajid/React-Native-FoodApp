import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"
import EvilIcons from 'react-native-vector-icons/EvilIcons'; 
import FeatherIcon from 'react-native-vector-icons/Feather'; 
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import { themeColor } from '../themes';
import Categories from '../components/Categories';
import { featuredData } from '../constants/constants';
import Featured from '../components/Featured';

const Homescreen = () => {
    return (
       
        <ScrollView>
          
        <SafeAreaView style={tw`bg-white flex-1`}>    
               <StatusBar  backgroundColor={"white"}  barStyle={"dark-content"}     />

<View style={tw`px-4 my-2`} > 
<View style={tw`flex-row items-center `} >
    <EvilIcons name="search" size={40} style={tw`text-slate-300`} />
    <TextInput 
    style={tw` ml-1  flex-1 h-8 text-slate-700   border-gray-300 border-r text-sm  p-1`}
    placeholder='Enter location'
    placeholderTextColor={"lightgray"}
    
    />
    <View style={tw`flex-row items-center ml-2 `} >
    <EntypoIcon name="location-pin" size={30} style={{...tw`text-orange-300 mt-1 `}} />
<Text style={tw`text-black`}>
    New York,NYC
</Text>
        <View style={tw`ml-3`}>
<FeatherIcon name="sliders"  size={25}  style={{...tw`text-white  rounded-full p-2`,backgroundColor:themeColor.bgColor(1)}}/>
        </View>
    </View>
    </View>
    </View>            
    {/* categories */}

<Categories/>


{/* restaurants */}

{
featuredData.map((item,index)=>
    (
      
        <Featured 
        key={index}
        title={item.title}
        description={item.description}
        restaurants={item.restaurants}
        />
    
    )

)
}



    {/* <ScrollView>
      {featuredData.map((item, index) => (
        <View key={item.id}>
          <Featured
            title={item.title}
            description={item.description}
            restaurants={item.restaurants}
          />
          <Text style={tw('text-black')}>{item.title} hi</Text>
        </View>
      ))}
    </ScrollView> */}



        </SafeAreaView>  
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Homescreen;
