import React, {useState, useEffect} from 'react';
import { Icon } from 'react-native-elements'
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const List = ({navigation}) => {
  const[ciudadesGuardadas, setCiudadesGuardadas] = useState([{}]);
    const isFocused = useIsFocused();

    useEffect(() => {
        getData();
    },[isFocused]);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('ciudades', jsonValue)
        } catch (e) {
          console.log("error al guardar los datos");
          console.log(e);
        }
      }
    
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('ciudades')
          if( jsonValue != null ) {
            console.log("------ en List ---------");  
            console.log(jsonValue);
            setCiudadesGuardadas(JSON.parse(jsonValue));
            console.log(JSON.parse(jsonValue));
          }else {
            console.log("no hay ciudades guardadas");
          } 
        } catch(e) {
          console.log("error al leer los datos");
          console.log(e);
        }
      }

      const eliminarCiudad = (ItemId) => {
        console.log("desde eliminar ciudadesGuardadas");
        console.log(ItemId);
        setCiudadesGuardadas( (ciudadesGuardadas) => {
            return ciudadesGuardadas.filter( ciudad => (ciudad.id != ItemId) );
        })
        storeData(ciudadesGuardadas);
        console.log("desde eliminar ciudadesGuardadas");
        console.log(ciudadesGuardadas);
      };

    const renderItem = ({ item }) => (
        <View style={styles.itemsBox} key={`${item.id}lista`}>
            <View style={styles.listaItem} key={`${item.id}bloque`}>
                <Text style={styles.listaItemName} key={`${item.id}name`}>{item.name}</Text>
                <TouchableOpacity
                    style={styles.listaItemButton} 
                    onPress={()=> {navigation.navigate('Clima',{lat: item.lat, lon: item.lon, name: item.name });}}
                    key={`${item.id}clima`}
                    >
                    <Icon name="weather-cloudy" type='material-community' color='#FFF' key={`${item.id}icon1`}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.listaItemButton} 
                    onPress={()=> {eliminarCiudad(item.id)}}
                    key={`${item.id}eliminar`}
                    >
                    <Icon name="trash-can-outline" type='material-community' color='#FFF' key={`${item.id}icon2`}/>
                </TouchableOpacity>
            </View>
        </View>
    );
    
    const ciudadesAMostrar = ciudadesGuardadas.filter(item => item.hasOwnProperty('id'));

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.jpg')} style={styles.img}>
                <View style={styles.container_title}>
                    <Text style={styles.title}>Listado de ciudades</Text>
                </View>
                
                <FlatList style={styles.container_flat}
                    data={ciudadesAMostrar}
                    renderItem={renderItem}
                    keyExtractor={ciudad => ciudad.id}
                />

                <TouchableOpacity 
                    style={styles.btn}
                    activeOpacity={0.6}
                    onPress = {() => navigation.navigate('Search')}    
                > 
                    <Icon name="plus" type='material-community'/>
                    
                </TouchableOpacity>
            </ImageBackground>    
        </View> 
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        flex: 1,
        alignItems:'center',
        resizeMode: 'cover'
    },
    container_title:{
        // flex: 0.1,
        marginTop: 50
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    container_flat:{
        // marginTop: 20,
        width: '70%',
    },
    itemsBox:{
        // backgroundColor: '#F21',
    },
    listaItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems:'center',
        backgroundColor: '#FFF',
    },
    listaItemName:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
      },
    listaItemButton:{
        padding: 5,
        margin: 15,
        borderRadius: 100,
        height: 30,
        width: 30,
        borderColor: '#000',
        borderWidth: 1,
        margin: 15,
        padding: 2,
        backgroundColor: '#388E3C',
        elevation: 10
    },
    titleName:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#3098DB',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 2,
        height: 70,
        width: 70,
        alignSelf: 'flex-end',
        right: 20,
        bottom: 120,
        shadowColor: "#000",
        elevation: 10
      },
})

export default List
