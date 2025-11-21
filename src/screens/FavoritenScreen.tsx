import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors } from '../theme/colors';
import { Item } from '../types';

const mockItems: Item[] = [
  {
    id: '1',
    title: 'Yamaha C80',
    subtitle: 'Konzertgitarre',
    image: '🎸',
    isFavorite: true,
    category: 'Musik',
    type: 'verleihen',
  },
  {
    id: '2',
    title: 'Harley Davidson',
    subtitle: '5000CC',
    image: '🏍️',
    isFavorite: true,
    category: 'Fahrzeuge',
    type: 'verleihen',
  },
  {
    id: '3',
    title: 'Electric',
    subtitle: 'Scooter',
    image: '🛴',
    isFavorite: true,
    category: 'Fahrzeuge',
    type: 'verleihen',
  },
  {
    id: '4',
    title: 'Steinway &',
    subtitle: 'Sons Piano',
    image: '🎹',
    isFavorite: true,
    category: 'Musik',
    type: 'verleihen',
  },
  {
    id: '5',
    title: '6 Seater',
    subtitle: 'Sofa Set',
    image: '🛋️',
    isFavorite: true,
    category: 'Bücher',
    type: 'verleihen',
  },
];

export default function FavoritenScreen() {
  const [activeTab, setActiveTab] = useState<'verleihen' | 'verschenken'>(
    'verleihen'
  );

  const filteredItems = mockItems.filter(item => item.type === activeTab);
  const countVerleihen = mockItems.filter(i => i.type === 'verleihen').length;
  const countVerschenken = mockItems.filter(i => i.type === 'verschenken').length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favoriten</Text>
        <TouchableOpacity style={styles.friendsButton}>
          <View style={styles.friendsIcon}>
            <Text style={styles.friendsIconText}>👥</Text>
          </View>
          <Text style={styles.friendsText}>Nur Freunde</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'verleihen' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('verleihen')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'verleihen' && styles.activeTabText,
            ]}>
            Zu Verleihen ({countVerleihen})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'verschenken' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('verschenken')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'verschenken' && styles.activeTabText,
            ]}>
            zu verschenken ({countVerschenken})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Item List */}
      <ScrollView style={styles.itemList}>
        {filteredItems.map(item => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemImage}>
              <Text style={styles.itemImageEmoji}>{item.image}</Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Text style={styles.bookmarkIcon}>🔖</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  friendsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  friendsIcon: {
    marginRight: 4,
  },
  friendsIconText: {
    fontSize: 16,
  },
  friendsText: {
    fontSize: 12,
    color: colors.text,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.white,
  },
  tabText: {
    color: colors.white,
    fontSize: 14,
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: '600',
  },
  itemList: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageEmoji: {
    fontSize: 32,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  itemSubtitle: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 4,
  },
  bookmarkButton: {
    padding: 8,
  },
  bookmarkIcon: {
    fontSize: 20,
  },
});
