import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87ceeb",
  },

  cabecalho: {
    backgroundColor: "#87ceeb",
    padding: 20,
    alignItems: "center",
  },
  cabecalhoTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#8b0000",
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },

  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
  },

  pickerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#8b0000",
    borderRadius: 4,
    marginBottom: 12,
  },
  picker: {
    height: 50,
    width: "100%",
  },

  medalha: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 10,
  },

  slider: {
    width: "100%",
    height: 40,
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#ff5722",
    borderRadius: 6,
    padding: 14,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 16,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultado: {
    alignItems: "center",
    marginTop: 8,
  },
  resultadoTexto: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },

  rodape: {
    backgroundColor: "#87ceeb",
    padding: 12,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#aaa",
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#555",
  },
});