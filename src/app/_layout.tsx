import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { PessoaProvider } from '../context/PessoaContext';

export default function TabLayout() {
  return (
    <PessoaProvider>
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6C63FF' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color as string} size={size} />,
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color as string} size={size} />,
          }}
        />
        <Tabs.Screen
          name="academica"
          options={{
            title: 'Acadêmica',
            tabBarIcon: ({ color, size }) => <Ionicons name="school" color={color as string} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profissional"
          options={{
            title: 'Profissional',
            tabBarIcon: ({ color, size }) => <Ionicons name="briefcase" color={color as string} size={size} />,
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            title: 'Projetos',
            tabBarIcon: ({ color, size }) => <Ionicons name="code-slash" color={color as string} size={size} />,
          }}
        />
      </Tabs>
    </PessoaProvider>
  );
}