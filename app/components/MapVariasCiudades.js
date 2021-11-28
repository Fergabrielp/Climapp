import React, {useState, useEffect} from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

function MapVariasCiudades() {
    const [ciudadesGuardadas, setCiudadesGuardadas] = useState([{}]);
  
    const isFocused = useIsFocused();
  
    useEffect(() => {
        getData();
    },[isFocused]);

    //  leo las ciudades que estan guardadas en el Storage y actualizo el estado con ellas 
    const getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('ciudades')
        if( jsonValue != null ) {
            setCiudadesGuardadas(JSON.parse(jsonValue));
        }else {
            console.log("no hay ciudades guardadas");
        } 
        } catch(e) {
        console.log("error al leer los datos");
        console.log(e);
        }
    }

    let location = {
        latitude: -34.603333,
        longitude: -58.381667,  
        latitudeDelta: 5,
        longitudeDelta: 5,
    }

    return (
        <MapView 
            style={styles.mapCiudad}
            region={location}
        >
            {
            ciudadesGuardadas.filter(item => item.hasOwnProperty('id')).map((element) => 
            <Marker coordinate={{ latitude: Number(element.lat), longitude: Number(element.lon), }} 
                    key={`${element.id}marker`}
                    pinColor="green"
                    image={require("../assets/img/ice-cream.png")} >
                <Text style={styles.CiudadNombreMapa}>{element.name}</Text>
            </Marker>)
            }
        </MapView>
    );

}

export default MapVariasCiudades

const styles = StyleSheet.create({
    mapCiudad:{
        width: '100%',
        height: '100%',
        marginBottom: 80
      },
    CiudadNombreMapa:{
        fontWeight: 'bold',
        color: 'green',
        fontSize: 14,
        zIndex: 10
    }
})