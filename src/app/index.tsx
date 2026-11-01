import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cores, fontes } from '../constants/theme';
import Card from '../components/Card';
import Tela from '../components/Tela';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <Tela cheio>
      {(p) => (
        <>
          <LinearGradient
            colors={[cores.primaria, cores.secundaria]}
            style={[styles.hero, { paddingTop: insets.top + 32 }]}
          >
            <Image source={require('../../assets/images/foto.jpeg')} style={styles.foto} />
            <Text style={styles.nome}>{p.nome}</Text>
            <Text style={styles.cargo}>{p.titulo}</Text>
            <Text style={styles.cidade}>📍 {p.cidade}</Text>
          </LinearGradient>

          <View style={styles.corpo}>
            <Card>
              <Text style={styles.resumo}>{p.resumo}</Text>
            </Card>
            {p.github ? (
              <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(p.github!)}>
                <Text style={styles.botaoTexto}>Ver GitHub</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(`mailto:${p.email}`)}>
              <Text style={styles.botaoTexto}>Enviar e-mail</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', paddingBottom: 32, paddingHorizontal: 20, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 },
  foto: { width: 130, height: 130, borderRadius: 65, borderWidth: 4, borderColor: '#fff', marginBottom: 14 },
  nome: { fontSize: 22, fontFamily: fontes.negrito, color: '#fff', textAlign: 'center' },
  cargo: { fontSize: 16, fontFamily: fontes.semi, color: '#E9E7FF', marginTop: 2 },
  cidade: { fontSize: 14, fontFamily: fontes.regular, color: '#E9E7FF', marginTop: 6 },
  corpo: { padding: 20, gap: 14 },
  resumo: { fontSize: 15, fontFamily: fontes.regular, color: cores.texto },
  botao: { backgroundColor: cores.primaria, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontFamily: fontes.semi, fontSize: 15 },
});