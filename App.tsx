import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const nombre: string = "César Andrés Castillo de Lira";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;

export default function App() {
  return (
    // ScrollView permite hacer scroll si el contenido no cabe
    <ScrollView contentContainerStyle={styles.scroll}>

      {/* ── ENCABEZADO / BANNER ── */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mi Perfil</Text>
      </View>

      {/* ── TARJETA CENTRAL ── */}
      <View style={styles.tarjeta}>

        {/* Foto de perfil */}
        <Image
          source={require('./assets/foto.jpg')}
          style={styles.avatar}
        />

        {/* Nombre y carrera */}
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.carrera}>{carrera}</Text>

        {/* Línea divisora */}
        <View style={styles.divisor} />

        {/* Datos */}
        <View style={styles.datosContainer}>
          <View style={styles.datoFila}>
            <Text style={styles.datoEtiqueta}>📚 Cuatrimestre</Text>
            <Text style={styles.datoValor}>{cuatrimestre}</Text>
          </View>
          <View style={styles.datoFila}>
            <Text style={styles.datoEtiqueta}>⭐ Promedio</Text>
            <Text style={styles.datoValor}>{promedio}</Text>
          </View>
          <View style={styles.datoFila}>
            <Text style={styles.datoEtiqueta}>🎓 Titulado</Text>
            <Text style={styles.datoValor}>{String(titulado)}</Text>
          </View>
        </View>

      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  // ScrollView ocupa toda la pantalla y centra el contenido
  scroll: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },

  // Banner superior de color
  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#3b82f6',   // azul
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  headerTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  // Tarjeta blanca con sombra
  tarjeta: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: -40,           // sube la tarjeta sobre el banner
    // Sombra en iOS:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Sombra en Android:
    elevation: 6,
    marginBottom: 30,
  },

  // Foto circular
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,         // la mitad = círculo perfecto
    borderWidth: 4,
    borderColor: '#3b82f6',   // borde azul igual al header
    marginBottom: 16,
    marginTop: -60,           // sobresale hacia arriba (efecto popular)
  },

  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  carrera: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Línea horizontal
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 20,
  },

  // Contenedor de los 3 datos
  datosContainer: {
    width: '100%',
  },

  // Cada fila: etiqueta a la izquierda, valor a la derecha
  datoFila: {
    flexDirection: 'row',           // pone los hijos en fila horizontal
    justifyContent: 'space-between',// los separa a los extremos
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  datoEtiqueta: {
    fontSize: 15,
    color: '#475569',
  },
  datoValor: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3b82f6',
  },

});