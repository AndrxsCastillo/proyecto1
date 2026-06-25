import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
  TextInput, TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';
import {
  insertarContacto, obtenerContactos,
  actualizarContacto, eliminarContacto,
  Contacto,
} from '../database/db';

export default function SQLiteScreen() {

  // Lista de contactos traídos de SQLite
  const [contactos, setContactos]   = useState<Contacto[]>([]);
  // Control de carga inicial
  const [cargando, setCargando]     = useState<boolean>(true);
  // ID del contacto en edición (null = modo inserción)
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // Campos del formulario
  const [nombre,   setNombre]   = useState('');
  const [telefono, setTelefono] = useState('');
  const [email,    setEmail]    = useState('');
  const [ciudad,   setCiudad]   = useState('');

  // Carga los datos al abrir la pantalla
  useEffect(() => {
    cargarContactos();
  }, []);

  const cargarContactos = async () => {
    setCargando(true);
    const datos = await obtenerContactos();
    setContactos(datos);
    setCargando(false);
  };

  const limpiarFormulario = () => {
    setNombre('');
    setTelefono('');
    setEmail('');
    setCiudad('');
    setEditandoId(null);
  };

  // Inserta o actualiza según si hay editandoId
  const guardar = async () => {
    if (!nombre.trim() || !telefono.trim() || !email.trim() || !ciudad.trim()) {
      Alert.alert('⚠️ Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    if (editandoId !== null) {
      await actualizarContacto(editandoId, nombre, telefono, email, ciudad);
      Alert.alert('✅ Actualizado', 'Contacto actualizado correctamente.');
    } else {
      await insertarContacto(nombre, telefono, email, ciudad);
      Alert.alert('✅ Guardado', 'Contacto insertado en SQLite.');
    }

    limpiarFormulario();
    await cargarContactos();
  };

  // Carga los datos del contacto en el formulario para editar
  const iniciarEdicion = (c: Contacto) => {
    setEditandoId(c.id);
    setNombre(c.nombre);
    setTelefono(c.telefono);
    setEmail(c.email);
    setCiudad(c.ciudad);
  };

  const confirmarEliminar = (id: number) => {
    Alert.alert(
      '🗑️ Eliminar contacto',
      '¿Estás seguro? Esta acción no se puede deshacer.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => eliminar(id) },
      ]
    );
  };

  const eliminar = async (id: number) => {
    await eliminarContacto(id);
    await cargarContactos();
  };

  return (
    <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>📇 Contactos SQLite</Text>
        <Text style={styles.headerSub}>
          {contactos.length} registro{contactos.length !== 1 ? 's' : ''} almacenado{contactos.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {/* ── Formulario ── */}
      <View style={styles.formulario}>
        <Text style={styles.formularioTitulo}>
          {editandoId !== null ? '✏️ Editar contacto' : '➕ Nuevo contacto'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#94a3b8"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#94a3b8"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#94a3b8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Ciudad"
          placeholderTextColor="#94a3b8"
          value={ciudad}
          onChangeText={setCiudad}
        />

        <View style={styles.botonesForm}>
          <TouchableOpacity style={styles.btnGuardar} onPress={guardar}>
            <Text style={styles.btnTexto}>
              {editandoId !== null ? '💾 Actualizar' : '💾 Guardar'}
            </Text>
          </TouchableOpacity>

          {editandoId !== null && (
            <TouchableOpacity style={styles.btnCancelar} onPress={limpiarFormulario}>
              <Text style={styles.btnTexto}>✕ Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ── Lista de registros ── */}
      <View style={styles.lista}>
        <Text style={styles.listaTitulo}>📋 Registros almacenados</Text>

        {cargando ? (
          <ActivityIndicator size="large" color="#2563eb" style={{ marginTop: 20 }} />
        ) : contactos.length === 0 ? (
          <View style={styles.sinDatosContainer}>
            <Text style={styles.sinDatos}>No hay contactos aún.</Text>
            <Text style={styles.sinDatosSub}>Agrega uno con el formulario de arriba.</Text>
          </View>
        ) : (
          contactos.map((contacto) => (
            <View key={contacto.id} style={styles.tarjeta}>

              <View style={styles.tarjetaInfo}>
                <Text style={styles.tarjetaId}>ID #{contacto.id}</Text>
                <Text style={styles.tarjetaNombre}>{contacto.nombre}</Text>
                <Text style={styles.tarjetaDato}>📞 {contacto.telefono}</Text>
                <Text style={styles.tarjetaDato}>✉️  {contacto.email}</Text>
                <Text style={styles.tarjetaDato}>📍 {contacto.ciudad}</Text>
              </View>

              <View style={styles.tarjetaBotones}>
                <TouchableOpacity
                  style={styles.btnEditar}
                  onPress={() => iniciarEdicion(contacto)}
                >
                  <Text style={styles.btnIcono}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnEliminar}
                  onPress={() => confirmarEliminar(contacto.id)}
                >
                  <Text style={styles.btnIcono}>🗑️</Text>
                </TouchableOpacity>
              </View>

            </View>
          ))
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#1e3a5f',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#93c5fd',
    fontSize: 14,
    marginTop: 4,
  },

  // Formulario
  formulario: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  formularioTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: '#1e293b',
    backgroundColor: '#f8fafc',
    marginBottom: 10,
  },
  botonesForm: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  btnGuardar: {
    flex: 1,
    backgroundColor: '#2563eb',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  btnCancelar: {
    flex: 1,
    backgroundColor: '#64748b',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  btnTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  // Lista
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  listaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  sinDatosContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  sinDatos: {
    fontSize: 16,
    color: '#64748b',
  },
  sinDatosSub: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
  },

  // Tarjeta de contacto
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  tarjetaInfo: {
    flex: 1,
  },
  tarjetaId: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 2,
  },
  tarjetaNombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  tarjetaDato: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 2,
  },
  tarjetaBotones: {
    gap: 8,
  },
  btnEditar: {
    backgroundColor: '#eff6ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnEliminar: {
    backgroundColor: '#fef2f2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnIcono: {
    fontSize: 18,
  },
});