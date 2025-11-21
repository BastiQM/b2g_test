import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function AlleErgebnisseIcon() {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>🌍</Text>
      </View>
      <Text style={styles.iconLabel}>Alle Ergebnisse</Text>
    </View>
  );
}

export function NurFreundeIcon() {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconCircle}>
        <Text style={styles.iconText}>👥</Text>
      </View>
      <Text style={styles.iconLabel}>Nur Freunde</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    padding: 8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 30,
  },
  iconLabel: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
  },
});
