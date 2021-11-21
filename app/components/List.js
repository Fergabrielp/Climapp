import React, {useState, useEffect} from 'react';
import { Icon } from 'react-native-elements'
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const List = ({navigation}) => {
    const[ciudades, setCiudades] = useState('');
    const isFocused = useIsFocused();

    useEffect(() => {
    getData();
    console.log(ciudades);
    },[isFocused]);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('ciudad', jsonValue)
        } catch (e) {
          console.log("error al guardar los datos");
          console.log(e);
    
        }
      }
    
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('ciudad')
          if( jsonValue != null ) {
            console.log("---------------");  
            console.log(jsonValue);
            setCiudades(JSON.parse(jsonValue));
            console.log(JSON.parse(jsonValue));
          }else {
            console.log("no hay ciudades guardadas");
          } 
    
        } catch(e) {
          console.log("error al leer los datos");
          console.log(e);
        }
      }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.jpg')} style={styles.img}>
                <View style={styles.container_title}>
                    <Text style={styles.title}>Listado de ciudades</Text>
                </View>
                
                {/* <FlatList />
                </FlatList> */}
                    <Text style={styles.title}>ciudades</Text>
                    <Text style={styles.title}>{ciudades.name}</Text>
                
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
        flex: 0.1,
        marginTop: 50
    },
    container_flat:{
        marginTop: 20,
    },
    title:{
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
