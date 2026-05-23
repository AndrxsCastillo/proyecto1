## Investigación

**¿Qué es React Native?**
React Native es un framework desarrollado por Meta que permite crear aplicaciones móviles para Android y iOS utilizando JavaScript y React.

La ventaja principal es que se puede usar una sola base de código para ambas plataformas, reduciendo tiempo y costos de desarrollo.

En React Native no se usan etiquetas HTML como <div> o <p>, sino componentes propios.


**Buenas prácticas**
1. Organizar el proyecto correctamente: Separar componentes, pantallas, servicios y estilos en carpetas distintas.
2. Usar componentes reutilizables para evitar repetir código.
3. Mantener el código limpio: Usar nombres claros, eliminar código innecesario, comentar solo cuando sea necesario.
4. Usar const y let correctamente: const → valores que no cambian. let → valores que sí cambian.
5. Separar estilos del componente con StyleSheet.
6. Validar datos del usuario: Evitar errores verificando entradas.
7. Evitar componentes demasiado grandes: Dividir pantallas complejas en varios componentes pequeños.


**Estructura básica de un proyecto**
MiProyecto/
│
├── android/
├── ios/
├── node_modules/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── styles/
│   └── assets/
│
├── App.js
├── package.json
└── README.md

- android/ → archivos nativos Android.
- ios/ → archivos nativos iOS.
- components/ → componentes reutilizables.
- screens/ → pantallas de la app.
- navigation/ → navegación entre pantallas.
- services/ → conexión con APIs o bases de datos.
- assets/ → imágenes, íconos y fuentes.
- App.js → archivo principal.


**Tipos de datos**
1. String (Texto):
const nombre = "Andrés";

2. Number (Número):
const edad = 22;

3. Boolean (Verdadero/Falso):
const activo = true;

4. Array (Arreglo):
const frutas = ["Manzana", "Uva", "Mango"];

5. Object (Objeto):
const usuario = {
  nombre: "Andrés",
  edad: 22
};

6. Null:
const dato = null;

7. Undefined:
const valor = undefined;