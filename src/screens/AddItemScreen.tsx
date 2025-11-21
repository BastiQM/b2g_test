import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { colors } from '../theme/colors';

type Step = 1 | 2 | 3;
type TransactionType = 'verleihen' | 'verschenken' | null;
type Visibility = 'public' | 'friends' | null;
type Category = 'Fahrzeuge' | 'Musik' | 'Sport' | 'Bücher' | 'Elektronik' | null;

export default function AddItemScreen() {
  const [step, setStep] = useState<Step>(1);
  const [transactionType, setTransactionType] = useState<TransactionType>(null);
  const [visibility, setVisibility] = useState<Visibility>('public');
  const [category, setCategory] = useState<Category>(null);
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [weight, setWeight] = useState('');

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.sectionTitle}>Art der Vergabe</Text>
      
      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={[
            styles.optionCard,
            transactionType === 'verleihen' && styles.optionCardSelected,
          ]}
          onPress={() => setTransactionType('verleihen')}>
          <Text style={styles.optionIcon}>📤</Text>
          <Text style={styles.optionText}>Zu verleihen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionCard,
            transactionType === 'verschenken' && styles.optionCardSelected,
          ]}
          onPress={() => setTransactionType('verschenken')}>
          <Text style={styles.optionIcon}>🎁</Text>
          <Text style={styles.optionText}>Zu verschenken</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.infoText}>
        Wichtig! Für alle Artikel gilt die Selbstabholung. Unsere Community
        arbeitet ohne kostenpflichtigen Versand und ohne Preise. Wir fördern den
        lokalen Austausch und die Nachhaltigkeit in deiner Community.
      </Text>

      <Text style={styles.sectionTitle}>Sichtbarkeit</Text>

      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setVisibility('public')}>
        <View style={styles.radioButton}>
          {visibility === 'public' && <View style={styles.radioButtonSelected} />}
        </View>
        <Text style={styles.radioText}>Öffentlich</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setVisibility('friends')}>
        <View style={styles.radioButton}>
          {visibility === 'friends' && <View style={styles.radioButtonSelected} />}
        </View>
        <Text style={styles.radioText}>Nur Freunde</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => setStep(2)}>
        <Text style={styles.nextButtonText}>Weiter</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.sectionTitle}>Details zum Artikel</Text>
      
      <Text style={styles.label}>Kategorie*</Text>
      <View style={styles.categoryRow}>
        {[
          { icon: '🚗', label: 'Fahrzeuge', value: 'Fahrzeuge' },
          { icon: '🎵', label: 'Musik', value: 'Musik' },
          { icon: '⚽', label: 'Sport', value: 'Sport' },
          { icon: '📚', label: 'Bücher', value: 'Bücher' },
          { icon: '📺', label: 'Elektronik', value: 'Elektronik' },
        ].map(cat => (
          <TouchableOpacity
            key={cat.value}
            style={[
              styles.categoryButton,
              category === cat.value && styles.categoryButtonSelected,
            ]}
            onPress={() => setCategory(cat.value as Category)}>
            <Text style={styles.categoryIcon}>{cat.icon}</Text>
            <Text style={styles.categoryLabel}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Artikelbezeichnung*</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor={colors.textLight}
      />

      <Text style={styles.label}>Beschreibung*</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder=""
        placeholderTextColor={colors.textLight}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Zustand*</Text>
      <TextInput
        style={styles.input}
        placeholder="Ersatzwert bei Beschädigung oder Verlust"
        placeholderTextColor={colors.textLight}
        value={condition}
        onChangeText={setCondition}
      />

      <Text style={styles.label}>Gewicht in Kilogramm</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor={colors.textLight}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text style={styles.sectionTitle}>Maße in Millimetern</Text>
      <View style={styles.dimensionsRow}>
        <View style={styles.dimensionInput}>
          <Text style={styles.dimensionLabel}>Länge</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <View style={styles.dimensionInput}>
          <Text style={styles.dimensionLabel}>Breite</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <View style={styles.dimensionInput}>
          <Text style={styles.dimensionLabel}>Höhe</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => setStep(3)}>
        <Text style={styles.nextButtonText}>Weiter</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.sectionTitle}>Bilder</Text>
      
      <View style={styles.imageGrid}>
        <View style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.uploadIcon}>📷</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteIcon}>❌</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.uploadIcon}>📤</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.uploadIcon}>📤</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.uploadIcon}>📤</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Speichern</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => {
            if (step > 1) {
              setStep((step - 1) as Step);
            }
          }}
          disabled={step === 1}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Gegenstand</Text>
          <Text style={styles.headerTitle}>hinzufügen</Text>
        </View>
        <Text style={styles.stepIndicator}>Step {step}/3</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 16,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
    color: colors.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  stepIndicator: {
    fontSize: 14,
    color: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  stepContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  optionCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 24,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  optionCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight + '20',
  },
  optionIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    color: colors.text,
  },
  infoText: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 16,
    lineHeight: 18,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  radioText: {
    fontSize: 16,
    color: colors.text,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryButton: {
    alignItems: 'center',
    padding: 8,
  },
  categoryButtonSelected: {
    backgroundColor: colors.primaryLight + '30',
    borderRadius: 8,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 4,
  },
  categoryLabel: {
    fontSize: 10,
    color: colors.text,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  dimensionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dimensionInput: {
    flex: 1,
    marginHorizontal: 4,
  },
  dimensionLabel: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 4,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  imageCard: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    fontSize: 48,
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.white,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: colors.gold,
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
