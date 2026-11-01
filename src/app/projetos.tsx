import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { cores } from '../constants/theme';
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
                <TouchableOpacity onPress={() => Linking.openURL(pr.link_repositorio!)}>
                  <Text style={styles.link}>Ver repositório</Text>
                </TouchableOpacity>
              ) : null}
              {pr.link_demo ? (
                <TouchableOpacity onPress={() => Linking.openURL(pr.link_demo!)}>
                  <Text style={styles.link}>Ver demo</Text>
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
  titulo: { fontSize: 18, fontWeight: 'bold', color: cores.texto },
  texto: { color: cores.texto },
  link: { color: cores.primaria, fontWeight: '600', marginTop: 6 },
});