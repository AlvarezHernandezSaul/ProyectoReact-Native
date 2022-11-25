import React from 'react';
import {COLOR_PRIMARY} from '../utils/paleta'
import {View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native';
export const CardAnuncio = () => {
return(

    <View style={styles.container}>
<Text style={styles.cardText}>La lengua de signos es una danza con las palabras,para se disfrutada desde bebes hasta adultos pasando por la infancia</Text>
<TouchableOpacity style={styles.btn}>
    <Text style={{textAlign:'center',paddingVertical:5,paddingHorizontal: 10, fontWeight: 'bold'}}>GRACIAS</Text>
</TouchableOpacity>

    </View>
)

}

const styles = StyleSheet.create({

container:{

    backgroundColor:COLOR_PRIMARY,
    width: 392,
        padding:20,
    borderRadius:30
},

btn:{
backgroundColor: '#fff',
borderRadius:30,
width:80,

},
cardText:{
    color:'#fff',
    fontSize:23,
    fontWeight: '500',
    marginBottom:20 

}



})



