import React from 'react';
import {Card} from '../components/card';
import {COLOR_SECONDARY} from '../utils/paleta';
import {Text, SafeAreaView, ScrollView, View, FlatList,TouchableOpacity,  Image, StyleSheet} from 'react-native';
import { CardAnuncio } from '../components/cardAnuncio';
import { CicleCategory } from '../components/circleCategori';






export const SettingsScreen = () => {

  return (
      <SafeAreaView style={styles.container}>
          <ScrollView showsHorizontalScrollIndicator={false}>
       <View style={styles.head}>
          <View>
        <  Text style={styles.name}> hi paloma reyes</Text>
        <  Text style={{fontSize:18,color:COLOR_SECONDARY}}> good morning</Text>
        </View>
        <Image style={styles.avatar} source={{uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}/>

       </View>
       <CardAnuncio/>
   <View>


   <View style={styles.sectionHead}>
<Text style={styles.titleCategory}>Categoria</Text>
<Text style={{color:COLOR_SECONDARY}}>ver todos</Text>

       </View>
      <FlatList
      data={ dataCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
          <TouchableOpacity key={item.id}>
              <CicleCategory {...item} />
          </TouchableOpacity>
      )}
      />



      </View>
   <View style={{marginBottom:20}}>
   <View style={styles.sectionHead}>
<Text style={styles.titleCategory}>ANUNCIO</Text>
<Text style={{color:COLOR_SECONDARY}}>ver todos</Text>

       </View>
      <Card/>
   </View>
   
      </ScrollView>
      </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  head: {
 
      justifyContent:'space-between',
      flexDirection: 'row',
      marginBottom: 40
      
  },
  sectionHead:{
      flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:40,
  marginBottom:10
  },
  titleCategory:{
fontSize:22,
fontWeight: 'bold',

  },
container:{
  flex:1,
  padding: 10,
  backgroundColor: 'rgb(235,235,235)'
},
sectionCategoria:{
flexDirection:'row',
marginTop:40,
},

avatar: {

  width:50,
  height:50,
  borderRadius:30,
},
name:{
fontSize:20,
fontWeight: 'boid'

}


})