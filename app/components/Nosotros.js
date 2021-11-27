import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  Linking,
} from "react-native";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";
import Animacion1 from "../components/Animacion1";

export default function Nosotros() {
  return (
    <ImageBackground
      source={require("../assets/img/background.jpg")}
      style={styles.img}
    >
      <StatusBar backgroundColor="#FFc107" barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.titulo1}>¿Quienes somos?</Text>
        </View>
        <View>
          <Animacion1 />
        </View>
        <View style={styles.containerGen}>
          <View>
            <Text style={styles.textos1}>
              Somos un grupo de desarrolladores conformados por:
            </Text>
            <View>
              <Text style={styles.nombres}>
                - Maria de la Paz Marzana
                <SocialIcon
                  type="linkedin"
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/maria-de-la-paz-marzana/"
                    )
                  }
                ></SocialIcon>
              </Text>
            </View>
            <View>
              <Text style={styles.nombres}>
                - Fernando Perez
                <SocialIcon
                  type="linkedin"
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/maria-de-la-paz-marzana/"
                    )
                  }
                ></SocialIcon>
              </Text>
            </View>
            <View>
              <Text style={styles.nombres}>
                - Juan Fernandez
                <SocialIcon
                  type="linkedin"
                  onPress={() =>
                    Linking.openURL(
                      "https://www.linkedin.com/in/juan-fern%C3%A1ndez-ige/"
                    )
                  }
                ></SocialIcon>
                {"\n"}
              </Text>
            </View>
          </View>
          <Text style={styles.textos}>
            En la búsqueda de una solución para obtener información sobre el
            clima de localidades o ciudades (en este caso de Argentina), se ha
            desarrollado una App donde se pueden realizar búsquedas brindando la
            posibilidad de luego agregar los resultados (ciudades) a un listado,
            el cual permite acceder a dichas ciudades más rápido. En este
            listado de ciudades guardadas también podemos eliminar dichas
            ciudades si así lo deseara el usuario.
          </Text>
          <Text style={styles.textos}>
            Para el desarrollo de esta App se ha utilizado la API OpenWeatherMap
            como fuente de información del clima, y para la obtención de
            coordenadas (latitud y longitud) de la ciudad buscada.{"\n"}
            <Text
              style={styles.links}
              onPress={() => Linking.openURL("https://openweathermap.org/")}
            >
              https://openweathermap.org/{"\n"}
            </Text>
          </Text>
          <Text style={styles.textos}>
            Para generar la API Key y obtener la respuesta con la informacion
            referente al clima se utilizo openweathermap.{"\n"}
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL("https://openweathermap.org/current")
              }
            >
              'https://openweathermap.org/current'{"\n"}
            </Text>
          </Text>
          <Text style={styles.textos}>
            Para visualizar la ciudad buscada y seleccionada en el mapa se
            utilizo la API de Google Maps {"\n"}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    alignItems: "center",
  },
  containerGen: {
    backgroundColor: "#F9F6F7",
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: -20
  },
  textos1: {
    marginTop: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 25,
    fontSize: 18,
  },
  textos: {
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 20,
  },
  img: {
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
  },
  logoImg: {
    width: 400,
    height: 400,
    marginLeft: 10,
    marginRight: 10,
  },
  titulo1: {
    marginTop: 50,
    fontSize: 30,
    color: "white",
    textAlign:"center"
  },
  nombres: {
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "justify",
    fontSize: 18,
  },
  links: {
    textDecorationLine: "underline",
    color: "blue",
  },
});

//<StatusBar style="auto" />;

//https://www.linkedin.com/in/maria-de-la-paz-marzana/