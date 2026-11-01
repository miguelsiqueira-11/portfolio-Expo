import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { cores, fontes } from '../constants/theme';
import Card from '../components/Card';
import Tela from '../components/Tela';

export default function Projetos() {
  return (
    <Tela titulo="Projetos">
      {(p) => (
        <>
          {p.projetos.map((pr) => (
            <Card key={pr.id}>
              <Text style={styles.titulo}>{pr.nome}{pr.ano ? ` · ${pr.ano}` : ''}</Text>
              {pr.descricao ? <Text style={styles.texto}>{pr.descricao}</Text> : null}
              {pr.link_repositorio ? (
                <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(pr.link_repositorio!)}>
                  <Text style={styles.botaoTexto}>Ver repositório</Text>
                </TouchableOpacity>
              ) : null}
              {pr.link_demo ? (
                <TouchableOpacity style={styles.botao} onPress={() => Linking.openURL(pr.link_demo!)}>
                  <Text style={styles.botaoTexto}>Ver demo</Text>
                </TouchableOpacity>
              ) : null}
            </Card>
          ))}
        </>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 17, fontFamily: fontes.negrito, color: cores.texto },
  texto: { fontFamily: fontes.regular, color: cores.texto },
  botao: { borderWidth: 1.5, borderColor: cores.primaria, borderRadius: 12, paddingVertical: 8, alignItems: 'center', marginTop: 8 },
  botaoTexto: { color: cores.primaria, fontFamily: fontes.semi },
});