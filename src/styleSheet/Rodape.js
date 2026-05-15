import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./estilos";

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Text style={estilos.rodapeTexto}>Bruno Rezende de Lima</Text>
    </View>
  );
}