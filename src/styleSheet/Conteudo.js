import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from "react-native";
import { estilos } from "./estilos";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default function Conteudo() {
  const [nomeUsr, setNomeUsr] = useState("");
  const [filmeSelecionado, setFilmeSelecionado] = useState("Matrix");
  const [nota, setNota] = useState(8.0);
  const [comentario, setComentario] = useState("");
  const [resultado, setResultado] = useState(null);

  const filmes = ["Matrix", "Vingadores", "Batman"];

  function avaliar() {
    setResultado({
      nome: nomeUsr,
      filme: filmeSelecionado,
      nota: nota.toFixed(1),
      comentario: comentario,
    });
  }

  return (
    <View style={estilos.conteudo}>
      <TextInput
        style={estilos.input}
        placeholder="Seu nome"
        value={nomeUsr}
        onChangeText={(texto) => setNomeUsr(texto)}
      />

      <Text style={estilos.label}>Escolha o filme:</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={filmeSelecionado}
          onValueChange={(itemValue) => setFilmeSelecionado(itemValue)}
          style={estilos.picker}
        >
          {filmes.map((filme) => (
            <Picker.Item key={filme} label={filme} value={filme} />
          ))}
        </Picker>
      </View>

      <Image
        source={require("../../assets/medal.png")}
        style={estilos.medalha}
        resizeMode="contain"
      />

      <Text style={estilos.label}>Nota: {nota.toFixed(1)}</Text>
      <Slider
        style={estilos.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={nota}
        onValueChange={(valor) => setNota(valor)}
        minimumTrackTintColor="#4caf50"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#009688"
      />

      <TextInput
        style={estilos.input}
        placeholder="Comentário"
        value={comentario}
        onChangeText={(texto) => setComentario(texto)}
      />

      <TouchableHighlight
        style={estilos.botao}
        underlayColor="#e64a19"
        onPress={avaliar}
      >
        <Text style={estilos.botaoTexto}>Avaliar</Text>
      </TouchableHighlight>

      {resultado && (
        <View style={estilos.resultado}>
          <Text style={estilos.resultadoTexto}>Nome: {resultado.nome}</Text>
          <Text style={estilos.resultadoTexto}>Filme: {resultado.filme}</Text>
          <Text style={estilos.resultadoTexto}>Nota: {resultado.nota}</Text>
          <Text style={estilos.resultadoTexto}>
            Comentário: {resultado.comentario}
          </Text>
        </View>
      )}
    </View>
  );
}