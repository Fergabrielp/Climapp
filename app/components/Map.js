import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


function Map(props) {
    const lat=props.lat;
    const lon=props.lon;
    const mapaVisible=props.mapaVisible;
    console.log(props);
    console.log(mapaVisible);

    let location = {
        latitude: Number(lat),
        longitude: Number(lon),  
        latitudeDelta: 0.922,
        longitudeDelta: 0.421,
    }
    console.log(lat)
    console.log(lon)

    if (mapaVisible){
        return (
            <MapView 
                style={styles.map}
                region={location}
            >
                <Marker coordinate={{ latitude: Number(lat), longitude: Number(lon), }} />
            </MapView>
    );
    }else{
        return <></>;
    }
}

export default Map

const styles = StyleSheet.create({
    map:{
        // alignItems: 'center',
        // marginTop: 80,
        width: '100%',
        height: '50%',
        marginBottom: 30
      }
})
