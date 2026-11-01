import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cores } from '../constants/theme';
import Tela from '../components/Tela';

export default function Home() {
  return (
    <Tela>
      {(p) => (
        <View style={styles.box}>
          <Text style={styles.nome}>{p.nome}</Text>
          <Text style={styles.cargo}>{p.titulo}</Text>
          <Text style={styles.suave}>{p.cidade}</Text>
          <Text style={styles.resumo}>{p.resumo}</Text>
          {p.github ? (
            <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(p.github!)}>
              <Text style={styles.botaoTexto}>GitHub</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(`mailto:${p.email}`)}>
            <Text style={styles.botaoTexto}>Enviar e-mail</Text>
          </TouchableOpacity>
        </View>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: 'center', gap: 8, paddingTop: 40 },
  nome: { fontSize: 26, fontWeight: 'bold', color: cores.texto, textAlign: 'center' },
  cargo: { fontSize: 18, color: cores.primaria, fontWeight: '600' },
  suave: { color: cores.suave },
  resumo: { fontSize: 16, color: cores.texto, textAlign: 'center', marginVertical: 12 },
  botao: { backgroundColor: cores.primaria, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10, width: 200, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
});