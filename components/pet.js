import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Pet({image, name,specie,age,location,  id, description, rating, price }) {
  const navigation = useNavigation();
  return (
    
  <View>
         
         <TouchableOpacity onPress={() => navigation.navigate("Preview", { image, name, specie, age, location, description, rating, price })}>
  <View style={styles.container}>
  <View style={styles.imageContainer}>

    <Image style={styles.image} source={image} />
  </View>
    <View style={styles.infoContainer}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.specie}>{specie}</Text>
    <Text style={styles.age}>{age} years old</Text>
    <View style={[styles.lasts]}> 
    <Text style={[styles.location, styles.last]} numberOfLines={1}><Ionicons name="md-location-outline" size={15} color="black" />{location}</Text>
  </View>
    </View>
  </View>
</TouchableOpacity>

  </View>
  )
}
{/* <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specie}>{specie}</Text>
      <Text style={styles.age}>{age} years old</Text>
      <View style={[styles.lasts]}> 
      <Text style={[styles.location, styles.last]} numberOfLines={1}><Ionicons name="md-location-outline" size={15} color="black" />{location}</Text>
      </View>
    </View>
  </View> */}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 5,
       
      },
      imageContainer: {
        flex: 1,
        marginRight: 35,
      },
      image: {
        width: 180,
        height: 180,
        borderRadius: 5,
      },
      infoContainer: {
        flex: 4,
        justifyContent: "center",
        marginHorizontal: 0,
        backgroundColor: "white",
        padding: 30,
        marginLeft:125,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9
      },
      name: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#0217D6"
      },
      specie: {
        fontSize: 14,
        color: "gray",
        opacity: 0.5,
        paddingVertical: 6
      },
      age: {
        fontSize: 13,
        color: "gray",
        opacity: 0.5,
        
      },
      location: {
        fontSize: 14,
        color: "gray",
        opacity: 0.5,
        paddingTop: 6
        
      },
      mainContainer:{
        marginBottom: 40
      }
     
    });

export default  Pet;

