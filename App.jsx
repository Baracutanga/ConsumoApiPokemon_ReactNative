import { ImageBackground, StyleSheet, Text, View } from "react-native";
import DisplayPokemon from "./components/DisplayPokemon";

export default function App() {
  return (
    <ImageBackground source={{ uri: 'https://i.redd.it/k9qljzis5d6b1.gif' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Gerar Pokemon Aleatório</Text>
        <DisplayPokemon />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
    height: "90%",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center'
  },
});
