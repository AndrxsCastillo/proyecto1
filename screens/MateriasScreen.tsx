import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

type Materia = {
  nombre: string;
  calificacion: number;
  emoji: string;
};

const materias: Materia[] = [
  { nombre: 'Desarrollo Móvil',        calificacion: 9.5, emoji: '📱' },
  { nombre: 'Desarrollo de negocios para TI',           calificacion: 8.8, emoji: '🗄️' },
  { nombre: 'Seguridad Informática',   calificacion: 9.0, emoji: '🌐' },
  { nombre: 'Inteligencia de Negocios', calificacion: 9.2, emoji: '🤖' },
  { nombre: 'Sistemas Embebidos',                  calificacion: 8.5, emoji: '📱' },
  { nombre: 'Expersión Oral y Escrita II',                  calificacion: 9.4, emoji: '🌐' },
];

export default function MateriasScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mis Materias</Text>
        <Text style={styles.headerSub}>9° Cuatrimestre</Text>
      </View>

      <View style={styles.contenedor}>
        {materias.map((materia, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.emoji}>{materia.emoji}</Text>
            <View style={styles.info}>
              <Text style={styles.nombreMateria}>{materia.nombre}</Text>
              <Text style={styles.calLabel}>Calificación</Text>
            </View>
            {/* Color verde si >=9, amarillo si >=8, rojo si <8 */}
            <Text style={[
              styles.calificacion,
              materia.calificacion >= 9 ? styles.verde :
              materia.calificacion >= 8 ? styles.amarillo : styles.rojo
            ]}>
              {materia.calificacion}
            </Text>
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
    backgroundColor: '#3b82f6',
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  headerTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#bfdbfe',
    fontSize: 14,
    marginTop: 4,
  },
  contenedor: {
    padding: 16,
    gap: 12,
  },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  emoji: {
    fontSize: 30,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  nombreMateria: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  calLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  calificacion: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  verde:    { color: '#16a34a' },
  amarillo: { color: '#d97706' },
  rojo:     { color: '#dc2626' },
});