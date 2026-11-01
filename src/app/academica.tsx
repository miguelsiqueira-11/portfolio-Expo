import { StyleSheet, Text } from 'react-native';
import { cores, fontes } from '../constants/theme';
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
  titulo: { fontSize: 17, fontFamily: fontes.negrito, color: cores.texto },
  sub: { fontSize: 14, fontFamily: fontes.semi, color: cores.primaria },
  suave: { fontSize: 13, fontFamily: fontes.regular, color: cores.suave },
  texto: { fontFamily: fontes.regular, color: cores.texto, marginTop: 4 },
});