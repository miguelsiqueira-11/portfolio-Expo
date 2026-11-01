import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { cores } from '../constants/theme';

export default function Card({ children }: { children: ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.card, borderRadius: 16, padding: 16, gap: 4,
    borderLeftWidth: 4, borderLeftColor: cores.primaria,
    elevation: 3, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 3 },
  },
});