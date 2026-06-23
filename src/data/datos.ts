// Tipos TypeScript para artesanos y productos
export type Artesano = {
  id: number;
  nombre: string;
  origen: string;
  especialidad: string;
  avatar: string;
};

export type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  artesanoId: number;
  imagen: string;
  disponible: boolean;
};

// Lista de artesanos
export const artesanos: Artesano[] = [
  {
    id: 1,
    nombre: 'María Xochitl',
    origen: 'Oaxaca',
    especialidad: 'Textiles',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    nombre: 'Juan Bautista',
    origen: 'Puebla',
    especialidad: 'Talavera',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    nombre: 'Rosa Mendoza',
    origen: 'Chiapas',
    especialidad: 'Ámbar',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

// Lista de productos con referencia al artesano
export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Rebozo Bordado',
    descripcion: 'Rebozo hecho a mano con hilos de seda natural',
    precio: 850,
    artesanoId: 1,
    imagen: 'https://picsum.photos/seed/rebozo/300/200',
    disponible: true,
  },
  {
    id: 2,
    nombre: 'Huipil Tradicional',
    descripcion: 'Huipil con bordado zapoteca en telar de cintura',
    precio: 1200,
    artesanoId: 1,
    imagen: 'https://picsum.photos/seed/huipil/300/200',
    disponible: true,
  },
  {
    id: 3,
    nombre: 'Jarrón Talavera',
    descripcion: 'Jarrón pintado a mano con motivos florales',
    precio: 650,
    artesanoId: 2,
    imagen: 'https://picsum.photos/seed/jarro/300/200',
    disponible: true,
  },
  {
    id: 4,
    nombre: 'Plato Decorativo',
    descripcion: 'Plato de talavera con diseño geométrico azul y blanco',
    precio: 420,
    artesanoId: 2,
    imagen: 'https://picsum.photos/seed/plato/300/200',
    disponible: false,
  },
  {
    id: 5,
    nombre: 'Collar de Ámbar',
    descripcion: 'Collar artesanal con piezas de ámbar chiapaneco',
    precio: 980,
    artesanoId: 3,
    imagen: 'https://picsum.photos/seed/collar/300/200',
    disponible: true,
  },
];