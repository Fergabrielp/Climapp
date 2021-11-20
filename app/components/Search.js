import { CommonActions } from '@react-navigation/routers';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
const API_KEY ='ede3ca5b2d0912688b80ead9e3f0d2d2';
import Map from '../components/Map';

const Search = () => {
  const[ciudadBuscada, setCiudadBuscada] = useState('');
  const[posiblesCiudades, setPosiblesCiudades] = useState([{}]);
  const[ciudadElegida, setCiudadElegida] = useState({lat:34.60, lon:122.43, name:"Ciudad de Buenos Aires"});

  useEffect(()=> {
    if (ciudadBuscada.length > 3) {
      fetchDataFromApi()
    }
  },[ciudadBuscada])
  
  const fetchDataFromApi = () => {
    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudadBuscada},AR&limit=20&appid=${API_KEY}`)

    // la siguiente anda para buscar el clima y coordenadas por ciudad
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadBuscada},AR&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      let cont = 0
      setPosiblesCiudades([{}])
      Object.entries(data).forEach(([key, value]) => {
        // console.log(`${key}: ${value}`)
        setPosiblesCiudades(posiblesCiudades => [...posiblesCiudades, {id:cont, lat:value.lat, lon:value.lon, name:value.name}]);
        cont++
        // console.log(posiblesCiudades)
        // console.log(cont)
      });

    })
  }

  const list = () => {
      return posiblesCiudades.map((element) => {
        console.log("dentro del map")
        console.log(element)
        console.log(element.id)
        console.log(element.name)
        console.log("posiblesCiudades")
        console.log(posiblesCiudades)
        if( typeof element.id !== 'undefined') {
          return (
            <View key={`${element.id}id`} style={styles.buscar}>
              {/* <Text key={`${element.id}name`}>Ciudad: {element.name}</Text>
              <Text key={`${element.id}lat`}>Lat: {element.lat}</Text>
              <Text key={`${element.id}lon`}>Lon: {element.lon}</Text> */}
              <Text key={`${element.id}name`}>{element.name}</Text>
              <Text key={`${element.id}lat`}>Lat: {element.lat} Lon: {element.lon}</Text>
            </View>
          );
        }
      });
  };


  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>AGREGAR NUEVA CIUDAD</Text>

      <View style={styles.buscar}>
        <TextInput 
          style={styles.buscar_txt}
          placeholder='Buscar ciudad...'
          placeholderTextColor= '#999'
          onChangeText={setCiudadBuscada}
          value={ciudadBuscada}
        ></TextInput>
      </View>


      <View>
        {list()}
      </View>

      <View style={styles.map}>
        <Text>Aca mostrar el mapa...</Text>
      </View>
      {/* <Map props={ciudadElegida.lat} lon={ciudadElegida.lon}></Map> */}
      <Map></Map>


      <TouchableOpacity style={styles.btn_accept}>
        <Icon name="check" type='material-community' color='#FFF'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn_cancel}>
        <Icon name="close" type='material-community' color='#FFF'/>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgb(71, 149, 212)'
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 40
  },
  buscar:{
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 50,
    marginHorizontal: 10,
    alignItems:'center',
    backgroundColor: '#FFF',
  },
  buscar_txt:{
    color: '#000',
    fontSize: 26
  },
  map:{
    alignItems: 'center',
    marginTop: 80
  },
  btn_accept:{
    borderRadius: 100,
    height: 70,
    width:70,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 240,
    padding: 20,
    marginHorizontal: 250,
    backgroundColor: '#388E3C',
    elevation: 10
  },
  btn_cancel:{
    borderRadius: 100,
    height: 70,
    width:70,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: -70,
    padding: 20,
    marginHorizontal: 80,
    backgroundColor: '#FF5252',
    elevation: 10
  }
});

export default Search;


