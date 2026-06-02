import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './screens/ProfileScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectScreen from './screens/ProjectScreen';

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
      </Tab.Navigator>
    </NavigationContainer>
  );
}