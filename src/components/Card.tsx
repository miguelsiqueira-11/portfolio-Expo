import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { cores } from '../constants/theme';

export default function Card({ children }: { children: ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.card, borderRadius: 14, padding: 16, gap: 4,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
});