import React from 'react';
import {View, Text , FlatList, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { useState } from 'react';
import Pet from "./components/pet";
import { Ionicons } from '@expo/vector-icons';

function Petshop({route, navigation}) {
  console.log(route.params);
    const [searchQuery, setSearchQuery] = useState('');

    const petsData = [
        { id:"1", name: "pastel", specie: "Cat", age: "2", location: "93 clinton  street Los Anglos USA", image: require("./assets/p1.jpeg"),  description: 'A lovely white cat with blue eyes.',rating: "⭐️⭐️⭐️⭐️⭐️",price: "900"},
        {id:"2", name: "Raka", specie: "Dog", age: "1.3", location: "23 whiteny   street London UK", image: require("./assets/p2.jpeg"), description: 'A playful puppy with brown fur.',rating: "⭐️⭐️⭐️⭐️☆",price: "1200" },
        { id:"3", name: "jhony", specie: "Rabbit", age: "2", location: "44 parnship  street Eastlegon GH", image: require("./assets/p3.jpeg"), description: 'A fluffy white rabbit.',rating: "⭐️⭐️⭐️⭐️⭐️",price: "700"  },
        { id:"4", name: "Goldfish", specie: "Goldfish", age: "1", location: "18 tradefair  street Lagos NG", image: require("./assets/p4.jpeg"), description: 'A bright orange goldfish.',rating: "⭐️⭐️☆☆☆",price: "300"  },
        { id:"5", name: "Hamster", specie: "Hamster", age: "1", location: "09 Shoreline   street Nairaobi Kenya", image: require("./assets/p5.jpeg"), description: 'A cute brown hamster.',rating: "⭐️☆☆☆☆",price: "500"  },
        { id:"6", name: "Parrot", specie: "Parrot", age: "2", location: "11 waterline  street Mozambique SA", image: require("./assets/p6.jpeg"), description: 'A colorful parrot with green and red feathers.',rating: "⭐️⭐️⭐️☆☆",price: "200"  },
        { id:"7", name: "Parrot", specie: "Parrot", age: "2", location: "77 rails   street Berlin Norway", image: require("./assets/p6.jpeg"),description: 'A colorful parrot with green and blue feathers.',rating: "⭐️⭐️⭐️⭐️☆",price: "300"  }
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
        <View style={styles.searchcontainer}>
        <TextInput

style={styles.searchInput}
placeholder="Search pets"
placeholderTextColor="gray"
value={searchQuery}
onChangeText={setSearchQuery} />

 <TouchableOpacity style={styles.btn} onPress={searchQuery} >
<Ionicons name="search" size={24} color="#0217D6" />
</TouchableOpacity>
        </View>

       <TouchableOpacity onPress={()=>{navigation.navigate("Preview")}}>
       <FlatList
        data={filteredPets}
        renderItem={({ item }) => (
          <Pet
            image={item.image}
            name={item.name}
            specie={item.specie}
            age={item.age}
            description={item.description}
            rating={item.rating}
            location={item.location}
            price={item.price}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
       </TouchableOpacity>
        
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
      backgroundColor: "white",
    },
    btn:{
        position: "absolute",
        left: 300,
        top: 7
    },
    searchcontainer:{
      marginTop: 50
    },
    container:{
      marginBottom: 230
    }
  });
export default Petshop;
