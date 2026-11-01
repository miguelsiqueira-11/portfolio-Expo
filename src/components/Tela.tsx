import { ReactNode } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cores, fontes } from '../constants/theme';
import { usePessoa } from '../context/PessoaContext';
import { Pessoa } from '../types';

type Props = { titulo?: string; cheio?: boolean; children: (pessoa: Pessoa) => ReactNode };

export default function Tela({ titulo, cheio, children }: Props) {
  const { pessoa, carregando, erro, recarregar } = usePessoa();

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color={cores.primaria} />
      </View>
    );
  }

  if (erro || !pessoa) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{erro ?? 'Sem dados.'}</Text>
        <TouchableOpacity style={styles.botao} onPress={recarregar}>
          <Text style={styles.botaoTexto}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.safe}>
      {titulo ? (
        <LinearGradient colors={[cores.primaria, cores.secundaria]} style={styles.cabecalho}>
          <SafeAreaView edges={['top']}>
            <Text style={styles.titulo}>{titulo}</Text>
          </SafeAreaView>
        </LinearGradient>
      ) : null}
      <ScrollView
        contentContainerStyle={cheio ? undefined : styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {children(pessoa)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: cores.fundo },
  cabecalho: { paddingHorizontal: 20, paddingBottom: 20, paddingTop: 12, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  titulo: { fontSize: 24, fontFamily: fontes.negrito, color: '#fff' },
  conteudo: { padding: 20, gap: 14 },
  centro: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: cores.fundo, padding: 20 },
  erro: { fontSize: 16, fontFamily: fontes.regular, color: cores.texto, marginBottom: 12, textAlign: 'center' },
  botao: { backgroundColor: cores.primaria, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12 },
  botaoTexto: { color: '#fff', fontFamily: fontes.semi },
});