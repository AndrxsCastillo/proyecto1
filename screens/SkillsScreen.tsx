import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Array con 5 habilidades
const habilidades: string[] = [
  'JavaScript',
  'React Native',
  'SQL',
  'Git & GitHub',
  'HTML & CSS',
];

// Un color por habilidad para los chips
const colores: string[] = [
  '#f59e0b',
  '#3b82f6',
  '#06b6d4',
  '#22c55e',
  '#8b5cf6',
  '#f97316',
  '#ec4899',
];

export default function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mis Habilidades</Text>
        <Text style={styles.headerSub}>{habilidades.length} tecnologías</Text>
      </View>

      <View style={styles.contenedor}>

        <Text style={styles.seccionTitulo}>Tecnologías</Text>
        <View style={styles.chipsWrap}>
          {habilidades.map((hab, i) => (
            <View
              key={i}
              style={[styles.chip, { backgroundColor: colores[i % colores.length] }]}
            >
              <Text style={styles.chipTexto}>{hab}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.seccionTitulo}>Detalle</Text>
        {habilidades.map((hab, i) => (
          <View key={i} style={styles.tarjeta}>
            <View
              style={[styles.barra, { backgroundColor: colores[i % colores.length] }]}
            />
            <Text style={styles.tarjetaTexto}>{hab}</Text>
            <Text style={styles.numero}>#{i + 1}</Text>
          </View>
        ))}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#8b5cf6',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#ddd6fe',
    fontSize: 14,
    marginTop: 4,
  },
  contenedor: {
    padding: 16,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 20,
    marginBottom: 12,
  },
  // Chips (badges)
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8,
    columnGap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  // Tarjetas de detalle
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  barra: {
    width: 6,
    height: 36,
    borderRadius: 3,
    marginRight: 14,
  },
  tarjetaTexto: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  numero: {
    fontSize: 13,
    color: '#cbd5e1',
    fontWeight: '600',
  },
});