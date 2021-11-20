import { CommonActions } from '@react-navigation/routers';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
const API_KEY ='ede3ca5b2d0912688b80ead9e3f0d2d2';


function Map() {
    // console.log({props})
    // console.log({props.ciudad})

    // console.log(props.ciudad.lat)

    // console.log(props.ciudad.lon)


    return (
        <MapView style={styles.map}
        initialRegion={{
            latitude: -34.6275498,
            longitude: -58.4515826,    
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
}

export default Map

const styles = StyleSheet.create({
    map:{
        // alignItems: 'center',
        // marginTop: 80,
        width: '50%',
        height: '50%'
      }
})
