import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import Navigations from './Navigations';
import { Provider } from 'react-redux'
import { store } from './store';


const App = () => {
  return (
    <Provider store={store} >
   <Navigations/>
   </Provider>
  );
}

const styles = StyleSheet.create({})

export default App;
