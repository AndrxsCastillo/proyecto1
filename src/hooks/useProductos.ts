import { useState, useEffect } from 'react';
import { productos as datosProductos, artesanos as datosArtesanos, Producto, Artesano } from '../data/datos';

// Definición del tipo que retorna el hook
type UseProductosReturn = {
  productos: Producto[];
  cargando: boolean;
  getArtesano: (artesanoId: number) => Artesano | undefined;
};

export function useProductos(): UseProductosReturn {

  // useState #1: almacena la lista de productos
  // Inicia vacío y se llena cuando los datos cargan
  const [productos, setProductos] = useState<Producto[]>([]);

  // useState #2: controla si los datos aún están cargando
  // Inicia en true porque al arrancar aún no hay datos
  const [cargando, setCargando] = useState<boolean>(true);

  // useEffect: se ejecuta UNA SOLA VEZ al montar el componente
  // Simula una llamada a API con un pequeño retraso
  useEffect(() => {
    const cargarDatos = async () => {
      // Simulamos latencia de red (como si fuera una API real)
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Guardamos los productos en el estado
      setProductos(datosProductos);

      // Indicamos que la carga terminó
      setCargando(false);
    };

    cargarDatos();
  }, []); // El [] significa "solo ejecutar al montar, no en cada render"

  // Función auxiliar: recibe un artesanoId y devuelve el artesano correspondiente
  // Devuelve undefined si no lo encuentra
  const getArtesano = (artesanoId: number): Artesano | undefined => {
    return datosArtesanos.find(a => a.id === artesanoId);
  };

  // El hook retorna los 3 valores que HomeScreen necesita
  return {
    productos,   // lista de productos (vacía mientras carga)
    cargando,    // true mientras espera, false cuando termina
    getArtesano, // función para buscar artesano por id
  };
}