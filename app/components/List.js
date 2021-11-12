import React from 'react'
import { Icon } from 'react-native-elements'
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity} from 'react-native'


const List = ({navigation}) => {


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/background.jpg')} style={styles.img}>
                <View style={styles.container_title}>
                    <Text style={styles.title}>Listado de ciudades</Text>
                </View>
                
                <FlatList style={styles.container_flat}>




                </FlatList>
                
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
