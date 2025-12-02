import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

// Esta es la función principal de tu pantalla
export default function App() {
  
  // Función 1: Lo que pasa al tocar el botón
  const pedirTurno = () => {
    // Aquí en el futuro conectaremos con AWS
    Alert.alert("Procesando...", "Conectando con AWS Lambda (puto)");
  };

  // Esto es lo que se "renderiza" (se ve) en pantalla
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>SISTEMA DE TURNOS</Text>
      <Text style={styles.subtitulo}>Prueba técnica React Native + AWS</Text>
      
      {/* Espaciador invisible */}
      <View style={{ height: 50 }} /> 

      {/* Un botón personalizado */}
      <TouchableOpacity style={styles.boton} onPress={pedirTurno}>
        <Text style={styles.textoBoton}>SACAR TURNO</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos (Diseño visual)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fondo gris claro
    alignItems: 'center', // Centrado horizontal
    justifyContent: 'center', // Centrado vertical
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  boton: {
    backgroundColor: '#005EB8', // Azul tipo "NHS"
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 5, // Sombra en Android
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});