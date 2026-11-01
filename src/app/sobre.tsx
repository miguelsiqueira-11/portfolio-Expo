import { StyleSheet, Text, View } from 'react-native';
import { cores } from '../constants/theme';
import Card from '../components/Card';
import Tela from '../components/Tela';

const TECNOLOGIAS = [
  'React Native', 'Expo', 'Expo Router', 'TypeScript', 'EAS Update',
  'API REST (Express + PostgreSQL no Vercel)',
];

export default function Sobre() {
  return (
    <Tela titulo="Sobre">
      {(p) => (
        <>
          <Card>
            <Text style={styles.texto}>{p.resumo}</Text>
          </Card>

          <Text style={styles.secao}>Habilidades</Text>
          <View style={styles.chips}>
            {p.habilidades.map((h) => (
              <View key={h.id} style={styles.chip}>
                <Text style={styles.chipTexto}>{h.nome} · {h.nivel}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.secao}>Tecnologias deste app</Text>
          <Card>
            {TECNOLOGIAS.map((t) => (
              <Text key={t} style={styles.texto}>• {t}</Text>
            ))}
          </Card>

          <Text style={styles.secao}>Funcionalidade extra</Text>
          <Card>
            <Text style={styles.texto}>Será preenchida depois de implementarmos.</Text>
          </Card>
        </>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  texto: { fontSize: 15, color: cores.texto },
  secao: { fontSize: 18, fontWeight: 'bold', color: cores.texto, marginTop: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: cores.primaria, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6 },
  chipTexto: { color: '#fff', fontSize: 13 },
});