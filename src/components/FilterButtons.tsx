import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

interface FilterButtonsProps {
  filterCount: number;
  onApplyFilter: () => void;
  onClearFilter: () => void;
}

export default function FilterButtons({
  filterCount,
  onApplyFilter,
  onClearFilter,
}: FilterButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.applyButton} onPress={onApplyFilter}>
        <Text style={styles.applyButtonText}>
          Filter anwenden ({filterCount})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={onClearFilter}>
        <Text style={styles.clearButtonText}>Filter löschen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
  applyButton: {
    backgroundColor: colors.primaryDark,
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  applyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
  },
  clearButtonText: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: '600',
  },
});
