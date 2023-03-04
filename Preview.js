import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

function Preview({route, navigation}) {
  const { image, name, specie, age, location, description, rating, price } = route.params;

  return (
    <View style={styles.mainContainer}>
       <View>
       <View style={styles.headerIcon}>
       <TouchableOpacity onPress={()=>{
    navigation.navigate("PetShop")}}>
            <Text><Ionicons name="arrow-back-sharp" size={24} color="black" /></Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text><Ionicons  name="md-cart-outline" size={24} color="#5100ad" /></Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.heartContainer}>
        <TouchableOpacity>
            <Text><EvilIcons name="heart" size={24} color="#5100ad" /></Text>
        </TouchableOpacity>
      </View>
        </View> 
     <View style={styles.container}>
        <View style={styles.imageContainer}>

      <Image style={styles.image} source={image} />
        </View>
      <View style={styles.textInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.rating}>Reviews: {rating}</Text>
      <View style={styles.hr}></View>
      <Text style={styles.specie}>{specie}</Text>
      <Text style={styles.age}>{age} years old</Text>
      <Text style={styles.location}  numberOfLines={2}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
     </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.pricecontainer}>
        <Text style={styles.total}>Amount</Text>
      <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Add to cart</Text>
        </TouchableOpacity>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        // paddingVertical: 50,
        // paddingHorizontal: 20
       
    },
    container: {
        backgroundColor: '#f1f1f1',
    },
    image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specie: {
    fontSize: 16,
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  headerIcon:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  heartContainer:{
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 11
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfo:{
    marginLeft: 30
  },
  hr:{
    height: 5,
    width: 45,
    backgroundColor: "#5100ad",
    borderRadius: 15,
    marginLeft: 0,
   marginVertical:10
 },
 total:{
    color: "white",
    fontWeight: "500"
},
btntext:{
    color: "white",
    fontWeight: "600"
},
btn:{
    backgroundColor: "#5211dd",
    padding: 11,
    borderRadius: 5
},
btnContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5100ad",
    marginTop: 40,
    borderRadius: 15,
    paddingHorizontal:12,
    paddingVertical: 12

 },
 price:{
    color:"#f1f1f1",
    marginLeft: 15,
    fontSize: 18,
    fontWeight:"bold"
 },
});

export default Preview;
