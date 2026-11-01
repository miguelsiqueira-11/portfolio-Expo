import { StyleSheet, Text } from 'react-native';
import { cores } from '../constants/theme';
import Card from '../components/Card';
import Tela from '../components/Tela';
import { formatarData } from '../utils/formatar';

export default function Profissional() {
  return (
    <Tela titulo="Experiência Profissional">
      {(p) => (
        <>
          {p.experiencias.map((e) => (
            <Card key={e.id}>
              <Text style={styles.titulo}>{e.cargo}</Text>
              <Text style={styles.sub}>{e.empresa}</Text>
              <Text style={styles.suave}>{formatarData(e.data_inicio)} – {formatarData(e.data_fim)}</Text>
              {e.descricao ? <Text style={styles.texto}>{e.descricao}</Text> : null}
            </Card>
          ))}
        </>
      )}
    </Tela>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 18, fontWeight: 'bold', color: cores.texto },
  sub: { fontSize: 15, color: cores.primaria },
  suave: { color: cores.suave },
  texto: { color: cores.texto, marginTop: 4 },
});