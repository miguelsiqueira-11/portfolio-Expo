import { ReactNode } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cores } from '../constants/theme';
import { usePessoa } from '../context/PessoaContext';
import { Pessoa } from '../types';

type Props = { titulo?: string; children: (pessoa: Pessoa) => ReactNode };

export default function Tela({ titulo, children }: Props) {
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
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {titulo ? <Text style={styles.titulo}>{titulo}</Text> : null}
        {children(pessoa)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 20, gap: 12 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: cores.texto, marginBottom: 4 },
  centro: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: cores.fundo, padding: 20 },
  erro: { fontSize: 16, color: cores.texto, marginBottom: 12, textAlign: 'center' },
  botao: { backgroundColor: cores.primaria, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10 },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
});