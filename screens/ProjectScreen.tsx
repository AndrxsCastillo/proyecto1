import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Objeto del proyecto integrador
const proyecto = {
  nombre: "VibeBloom",
  version: "1.0.0",
  descripcion: "Plataforma digital enfocada en el descubrimiento de lugares con identidad visual, estética y atmósfera única.",
  repositorio: "github.com/usuario/mi-proyecto",
  activo: true,
};

export default function ProjectScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>Mi Proyecto</Text>
        <View style={[styles.badge, proyecto.activo ? styles.badgeOn : styles.badgeOff]}>
          <Text style={styles.badgeTexto}>
            {proyecto.activo ? '🟢  Activo' : '🔴  Inactivo'}
          </Text>
        </View>
      </View>

      <View style={styles.contenedor}>

        <Text style={styles.seccionTitulo}>📋 Campos individuales</Text>
        <View style={styles.tarjeta}>
          <Campo etiqueta="Nombre"      valor={proyecto.nombre} />
          <Campo etiqueta="Versión"     valor={proyecto.version} />
          <Campo etiqueta="Descripción" valor={proyecto.descripcion} />
          <Campo etiqueta="Repositorio" valor={proyecto.repositorio} />
          <Campo etiqueta="Activo"      valor={String(proyecto.activo)} />
        </View>

        <Text style={styles.seccionTitulo}>🔍 JSON.stringify()</Text>
        <View style={styles.jsonCard}>
          <Text style={styles.jsonTexto}>
            {JSON.stringify(proyecto, null, 2)}
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

function Campo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.campo}>
      <Text style={styles.campoEtiqueta}>{etiqueta.toUpperCase()}</Text>
      <Text style={styles.campoValor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#0f172a',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeOn:  { backgroundColor: '#166534' },
  badgeOff: { backgroundColor: '#7f1d1d' },
  badgeTexto: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  contenedor: { padding: 16 },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 20,
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  campo: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  campoEtiqueta: {
    fontSize: 11,
    color: '#94a3b8',
    letterSpacing: 1,
    marginBottom: 3,
  },
  campoValor: {
    fontSize: 15,
    color: '#1e293b',
    fontWeight: '500',
  },
  jsonCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
  },
  jsonTexto: {
    color: '#7dd3fc',
    fontSize: 13,
    lineHeight: 22,
  },
});