import React from "react";
import { View } from "react-native";
import {estilos} from "./src/styleSheet/estilos";
import Cabecalho from "./src/styleSheet/Cabecalho";
import Conteudo from "./src/styleSheet/Conteudo";
import Rodape from "./src/styleSheet/Rodape";


function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}
export default App;