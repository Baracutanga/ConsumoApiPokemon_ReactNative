import { Image, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";

// const Item = ({ nome, order, sprite }) => {
//   return (
//     <View>
//       <Image source={{ uri: sprite }} />
//       <Text>Nome: {nome}</Text>
//       <Text>Order: {order}</Text>
//     </View>
//   );
// };

const DisplayPokemon = () => {
  const [pokemonData, setPokemonData] = useState({
    nome: "",
    number: 0,
    sprite: "",
  });

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const orderNumber = () => {
    return Math.floor(Math.random() * 1025);
  };

  const fetchData = () => {
    axios
      .get(`${URL}${orderNumber()}`)
      .then((response) => {
        setPokemonData({
          nome: response.data.name,
          number: response.data.id,
          sprite: response.data.sprites.front_default,
        });
      })
      .catch((err) => console.log(`Erro na requisição: ${err}`));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Gerar"
        onPress={fetchData}
        color="orange"
        style={styles.button}
      />
      <View style={styles.display}>
        <View style={styles.containerInfos}>
          <Text style={styles.nomePokemon}>Nome: {pokemonData.nome}</Text>
          <Text style={styles.orderPokemon}>Número: {pokemonData.number}</Text>
          {pokemonData.sprite ? ( // Renderiza a imagem apenas se a sprite não estiver vazia
            <Image
              style={styles.spritePokemon}
              source={{ uri: pokemonData.sprite }}
            />
          ) : (
            <Text style={styles.text}>Precione o botão para gerar.</Text> // Mensagem quando não há Pokémon
          )}
        </View>
      </View>
    </View>
  );
};

export default DisplayPokemon;

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  nomePokemon: {
    color: "#4268a7",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  display: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, .6)",
    padding: 10,
    borderRadius: 5
  },
  orderPokemon: {
    textAlign: "center",
    fontWeight: "300",
  },
  spritePokemon: {
    width: 170,
    height: 170
  },
});
