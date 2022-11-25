import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR_PRIMARY} from '../utils/paleta';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import {  Text, ScrollView, Image, TouchableOpacity,    StyleSheet, View,  } from 'react-native'


export const welcomeScreen = ({navigation}) => {
 
 
  if(Platform.OS == "android"){
    console.log('hola desde app')
  }
  
  return (
    <SafeAreaView style={styles.main}>
     <ScrollView>
    <View style={styles.head}>
   <Text style={styles.title}>my {'\n'} app</Text>
    <Image style={styles.img} source={require('../assest/img/quiero.png')} />
    </View>

    <View style={styles.description}>
      <View style={styles.ovalado}/>
    <Text style={styles.title}>Aprendiendo Señas</Text>
    <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate ('Root')}>
          <AntDesign name='right' style={styles.circleIcon} />
      <Text style={styles.textBtn}>Presione para Iniciar</Text>
    </TouchableOpacity>
    
    </View>
    </ScrollView> 
   
 </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  main:{
    flex:1,
    backgroundColor: COLOR_PRIMARY
  },

  ovalado:{
width: 220,
height: 390,
backgroundColor: '#fff',
borderRadius:200,
position:'absolute',
top: -80,
transform: 
[{
scaleX: 2

}]


  },


  textBtn: {
    textAlign:"center",
    position: 'relative',
    left:-20,
   color: 'white', 
   fontSize: 20, 
   fontWeight: '500'
  },  


  circleIcon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 10,
    position: 'relative',
  padding:20,
  left:-40,
    fontSize:20,
  }, 


  description: {
   padding: 20,
   alignItems: "center",
   backgroundColor: 'white',
   position: 'relative',
   top: -60,
   height: '100%',
  },

  btnStart: {
    flexDirection: 'row',
    marginTop: 26,
    alignItems: "center",
    backgroundColor: COLOR_PRIMARY,
    paddingHorizontal: 40,
    borderRadius: 40,
  },


  head: {  
    padding: 15,
  },

  title: {
    fontSize:40,
    fontWeight: 'bold',
    color:'black'
  },
  img:{
    position:'relative',
    top: -120,
    right: 50,
    justifyContent:'center',
    ralignItems:'center',
  }

})

