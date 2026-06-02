import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Tipos de datos requeridos
const nombre: string = "César Andrés Castillo de Lira";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;
const certificacion: string | null = null;


export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mi Perfil</Text>
      </View>

      <View style={styles.tarjeta}>
        <Image
          source={require('../assets/foto.jpg')}
          style={styles.avatar}
        />

        <View style={styles.badgeContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.iconLocal}
          />
          <Text style={styles.badgeTexto}>Estudiante Verificado</Text>
        </View>

        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.carrera}>{carrera}</Text>

        <View style={styles.divisor} />

        <View style={styles.datosContainer}>
          <FilaDato etiqueta="📚 Cuatrimestre" valor={String(cuatrimestre)} />
          <FilaDato etiqueta="⭐ Promedio" valor={String(promedio)} />
          <FilaDato etiqueta="🎓 Titulado" valor={String(titulado)} />
          <FilaDato
            etiqueta="📜 Certificación"
            valor={certificacion ?? 'Sin asignar'}
            esNulo={certificacion === null}
          />
        </View>

      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

// Componente reutilizable
function FilaDato({
  etiqueta,
  valor,
  esNulo = false,
}: {
  etiqueta: string;
  valor: string;
  esNulo?: boolean;
}) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={[styles.valor, esNulo && styles.valorNulo]}>{valor}</Text>
    </View>
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
    marginTop: -60,
    marginBottom: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 14,
  },
  iconLocal: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginRight: 6,
  },
  badgeTexto: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '600',
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
    marginBottom: 16,
  },
  datosContainer: { width: '100%' },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  etiqueta: { fontSize: 15, color: '#475569' },
  valor:    { fontSize: 15, fontWeight: '600', color: '#3b82f6' },
  valorNulo:{ color: '#94a3b8', fontStyle: 'italic' },
});