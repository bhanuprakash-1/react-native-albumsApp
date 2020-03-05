//import library
import React from 'react';
import { AppRegistry , View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create a component

const App = () => (

    //<Text>Some text !</Text>
    <View style= {{ flex:1 }}>
        <Header headerText = { 'Albums' } /> 
        <AlbumList />  
    </View>

);



//Render it to device  

AppRegistry.registerComponent('albums',() => App) ;