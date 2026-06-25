import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Práctica anterior — se quedan igual
import ProfileScreen  from './screens/ProfileScreen';
import SkillsScreen   from './screens/SkillsScreen';
import ProjectScreen  from './screens/ProjectScreen';

// Nueva práctica — Custom Hook
import HomeScreen     from './src/screens/HomeScreen';

// Import para SQLite
import SQLiteScreen from './src/screens/SQLiteScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#e2e8f0',
            height: 60,
            paddingBottom: 8,
          },
        }}
      >
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 22 }}>👤</Text> }}
        />
        <Tab.Screen
          name="Habilidades"
          component={SkillsScreen}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 22 }}>💡</Text> }}
        />
        <Tab.Screen
          name="Proyecto"
          component={ProjectScreen}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 22 }}>🚀</Text> }}
        />
        {/* ← Nueva pestaña para la práctica del Custom Hook */}
        <Tab.Screen
          name="Subasta"
          component={HomeScreen}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏺</Text> }}
        />
        <Tab.Screen
          name="Contactos"
          component={SQLiteScreen}
          options={{ tabBarIcon: () => <Text style={{ fontSize: 22 }}>🗄️</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// REFLEXIÓN ENTREGA

// Los Custom Hooks permiten separar la lógica de negocio de la UI. Sin el hook, HomeScreen tendría que manejar useState,
// useEffect y la búsqueda de artesanos directamente, mezclando responsabilidades. Con el hook, la pantalla solo se preocupa
//  por mostrar datos, y el hook por obtenerlos. Esto hace el código más reutilizable (cualquier otra pantalla puede usar
//  useProductos()) y más fácil de mantener (cambiar la fuente de datos solo requiere modificar el hook).