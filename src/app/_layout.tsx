import { PessoaProvider } from '../context/PessoaContext';
import { fontes } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';

export default function TabLayout() {
  const [carregou] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold });
  if (!carregou) return null;

  return (
    <PessoaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6C63FF',
          tabBarLabelStyle: { fontFamily: fontes.semi, fontSize: 11 },
        }}
      >
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