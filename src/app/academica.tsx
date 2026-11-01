import { StyleSheet, Text } from 'react-native';
import { cores } from '../constants/theme';
import Card from '../components/Card';
import Tela from '../components/Tela';
import { formatarData } from '../utils/formatar';

export default function Academica() {
  return (
    <Tela titulo="Experiência Acadêmica">
      {(p) => (
        <>
          {p.formacoes.map((f) => (
            <Card key={f.id}>
              <Text style={styles.titulo}>{f.curso}</Text>
              <Text style={styles.sub}>{f.instituicao} · {f.nivel}</Text>
              <Text style={styles.suave}>{formatarData(f.data_inicio)} – {formatarData(f.data_fim)}</Text>
              {f.descricao ? <Text style={styles.texto}>{f.descricao}</Text> : null}
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