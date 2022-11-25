import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Foundation from 'react-native-vector-icons/Foundation';
import { COLOR_PRIMARY } from "../utils/paleta";
import image from "react-native";

export const CicleCategory = ({title, icon, isActive}) => {
    return(
        <View style={styles.container}>
            <View style={[styles.circulo, isActive ? {backgroundColor: COLOR_PRIMARY} : {backgroundColor:'#cdcdcd '}]} >
                <Foundation style={{padding:20, fontSize: 25}} name={image}/>
                
            </View>
<Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:
{

    width:150,
    alignItems: 'center',
    height: 150,




},
title:{
textAlign:'center',
fontWeight: '500',


},
circulo:{
width:100,
height: 100,

borderRadius: 50,
marginBottom: 10,

},


}

)