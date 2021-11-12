import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const Search = () => {

  return (

    <View style={styles.container}>
      
      <Text style={styles.title}>AGREGAR NUEVA CIUDAD</Text>

      <View style={styles.buscar}>
        <TextInput 
          style={styles.buscar_txt}
          placeholder='Buscar ciudad...'
          placeholderTextColor= '#999'  
        ></TextInput>
      </View>

      <View style={styles.map}>
        <Text>Aca mostrar el mapa...</Text>
      </View>

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


