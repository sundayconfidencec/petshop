import React from 'react';
import {View, Text , FlatList, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { useState } from 'react';
import Pet from "./components/pet";
import { Ionicons } from '@expo/vector-icons';

function Petshop() {
    const [searchQuery, setSearchQuery] = useState('');

    const petsData = [
        {image: "./assets/p1.jpeg", name: "pastel", specie: "Cat", age: "2", location: "93 Shoreline  Dr...", image: require("./assets/p1.jpeg")},
        {image: "./assets/p2.jpeg", name: "Raka", specie: "Dog", age: "1.3", location: "93 Shoreline  Dr...", image: require("./assets/p2.jpeg"), },
        {image: "./assets/p3.jpeg", name: "jhony", specie: "Rabbit", age: "2", location: "93 Shoreline  Dr...", image: require("./assets/p3.jpeg") },
        {image: "./assets/p4.jpeg", name: "Goldfish", specie: "Goldfish", age: "1", location: "93 Shoreline  Dr...", image: require("./assets/p4.jpeg") },
        {image: "./assets/p5.jpeg", name: "Hamster", specie: "Hamster", age: "1", location: "93 Shoreline  Dr...", image: require("./assets/p5.jpeg") },
        {image: "./assets/p6.jpeg", name: "Parrot", specie: "Parrot", age: "2", location: "93 Shoreline  Dr...", image: require("./assets/p6.jpeg") }
    ];

  const filterPets = (pets, query) => {
    return pets.filter(pet => {
      const name = pet.name.toLowerCase();
      const specie = pet.specie.toLowerCase();
      const age = pet.age.toString();
      const location = pet.location.toLowerCase();
      const searchText = query.toLowerCase();
      return (
        name.includes(searchText) ||
        specie.includes(searchText) ||
        age.includes(searchText) ||
        location.includes(searchText)
      );
    });
  };
  const filteredPets = filterPets(petsData, searchQuery);
  return (
    <View style={styles.container} >
        <TextInput

        style={styles.searchInput}
        placeholder="Search pets"
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery} />
         <TouchableOpacity style={styles.btn} onPress={searchQuery} >
        <Ionicons name="search" size={24} color="#0217D6" />
      </TouchableOpacity>
        <FlatList
        data={filteredPets}
        renderItem={({ item }) => (
          <Pet
            image={item.image}
            name={item.name}
            specie={item.specie}
            age={item.age}
            location={item.location}
          />
        )}
        keyExtractor={item => item.name}
      />
        
    </View>
  )
}

const styles = StyleSheet.create({
   
    searchInput: {
      height: 40,
      borderWidth: 1,
      borderColor: '#E1E1E3',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      paddingLeft: 60,
      backgroundColor: "white"
    },
    btn:{
        position: "absolute",
        left: 20,
        top: 7
    }
  });
export default Petshop;
