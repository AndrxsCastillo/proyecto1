import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import PerfilScreen   from './screens/PerfilScreen';
import MateriasScreen from './screens/MateriasScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,          // ocultamos el header por defecto
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
          component={PerfilScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>👤</Text> }}
        />
        <Tab.Screen
          name="Materias"
          component={MateriasScreen}
          options={{ tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📚</Text> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}