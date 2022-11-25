import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export const TestComponent = () => {
    return(
        <View style={styles.container}> 
        <Text style={styles.text}>holaaaaaaaaa</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    text: {
      color: 'red',
      marginTop: 20,
    },
    container:{
      width: 300,
      backgroundColor: '#cdcdcd',
      marginBottom:50,
    }
      
    });
