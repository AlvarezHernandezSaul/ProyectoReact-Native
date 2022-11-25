import React from "react";
import {COLOR_PRIMARY_OPACITY} from '../utils/paleta'
import { View, Text, Image, StyleSheet } from "react-native";


export const Card = () => {
return (

    <View style={styles.container}>
       <View style={styles.content}>
        <View>
            <Image style={styles.image} source={require('../assest/img/anuncio.jpg')}/>
        </View>

       </View>

    </View>
)
}


const styles = StyleSheet.create({

    container:{
    width:380,
    backgroundColor:COLOR_PRIMARY_OPACITY,
    padding: 10,
    borderRadius:20,
    },


    content:{
    flexDirection: 'row',
    justifyContent: 'space-between'

    },

    image:{
        width:279,
        height: 125,
      right : -55,
        padding: 10,
        borderRadius:10,

    },



})












