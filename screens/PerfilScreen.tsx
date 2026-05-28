import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const nombre: string = "César Andrés Castillo de Lira";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mi Perfil</Text>
      </View>

      <View style={styles.tarjeta}>
        <Image
          source={require('../assets/foto.jpg')} // o tu url
          style={styles.avatar}
        />

        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.carrera}>{carrera}</Text>

        <View style={styles.divisor} />

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
  scroll: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 180,
    backgroundColor: '#3b82f6',
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
  tarjeta: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#3b82f6',
    marginBottom: 16,
    marginTop: -60,
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
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 20,
  },
  datosContainer: {
    width: '100%',
  },
  datoFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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