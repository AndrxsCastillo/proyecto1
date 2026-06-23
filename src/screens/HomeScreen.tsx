import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useProductos } from '../hooks/useProductos';

export default function HomeScreen() {

  // ✅ Usamos el custom hook — ya no importamos datos directamente
  const { productos, cargando, getArtesano } = useProductos();

  // ── Indicador de carga mientras los datos se obtienen ──
  if (cargando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#b45309" />
        <Text style={styles.loadingTexto}>Cargando productos...</Text>
      </View>
    );
  }

  // ── Pantalla principal una vez que los datos están listos ──
  return (
    <ScrollView style={styles.scroll}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>🏺 Artisan Auction</Text>
        <Text style={styles.headerSub}>{productos.length} productos disponibles</Text>
      </View>

      {/* Lista de productos */}
      <View style={styles.contenedor}>
        {productos.map((producto) => {
          // Obtenemos el artesano con la función del hook
          const artesano = getArtesano(producto.artesanoId);

          return (
            <View key={producto.id} style={styles.tarjeta}>

              {/* Imagen del producto */}
              <Image
                source={{ uri: producto.imagen }}
                style={styles.imagenProducto}
              />

              {/* Badge de disponibilidad */}
              <View style={[
                styles.badge,
                producto.disponible ? styles.badgeActivo : styles.badgeInactivo
              ]}>
                <Text style={styles.badgeTexto}>
                  {producto.disponible ? 'Disponible' : 'Agotado'}
                </Text>
              </View>

              <View style={styles.info}>

                {/* Datos del producto */}
                <Text style={styles.nombreProducto}>{producto.nombre}</Text>
                <Text style={styles.descripcion}>{producto.descripcion}</Text>
                <Text style={styles.precio}>${producto.precio} MXN</Text>

                {/* Datos del artesano (obtenidos con getArtesano) */}
                {artesano && (
                  <View style={styles.artesanoContainer}>
                    <Image
                      source={{ uri: artesano.avatar }}
                      style={styles.avatarArtesano}
                    />
                    <View>
                      <Text style={styles.artesanoNombre}>{artesano.nombre}</Text>
                      <Text style={styles.artesanoDetalle}>
                        {artesano.especialidad} · {artesano.origen}
                      </Text>
                    </View>
                  </View>
                )}

              </View>
            </View>
          );
        })}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Pantalla de carga
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbeb',
    gap: 16,
  },
  loadingTexto: {
    fontSize: 16,
    color: '#92400e',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#fffbeb',
  },

  // Header
  header: {
    backgroundColor: '#92400e',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTexto: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#fcd34d',
    fontSize: 14,
    marginTop: 4,
  },

  contenedor: {
    padding: 16,
    gap: 16,
  },

  // Tarjeta de producto
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 4,
  },
  imagenProducto: {
    width: '100%',
    height: 180,
  },

  // Badge disponible/agotado
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeActivo:   { backgroundColor: '#166534' },
  badgeInactivo: { backgroundColor: '#7f1d1d' },
  badgeTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  info: {
    padding: 16,
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1917',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 13,
    color: '#78716c',
    marginBottom: 10,
    lineHeight: 18,
  },
  precio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b45309',
    marginBottom: 14,
  },

  // Info del artesano
  artesanoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  avatarArtesano: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#b45309',
  },
  artesanoNombre: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1c1917',
  },
  artesanoDetalle: {
    fontSize: 12,
    color: '#78716c',
  },
});