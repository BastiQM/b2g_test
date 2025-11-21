import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import FavoritenScreen from '../screens/FavoritenScreen';
import AddItemScreen from '../screens/AddItemScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({ emoji, size = 24 }: { emoji: string; size?: number }) => (
  <Text style={[styles.tabIcon, { fontSize: size }]}>{emoji}</Text>
);

const SearchIcon = () => <TabIcon emoji="🔍" size={32} />;

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white + '80',
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="Favourite"
        component={FavoritenScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: () => <TabIcon emoji="❤️" />,
        }}
      />
      <Tab.Screen
        name="MeinDeals"
        component={FavoritenScreen}
        options={{
          tabBarLabel: 'Mein Deals',
          tabBarIcon: () => <TabIcon emoji="🤝" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={FavoritenScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="MeinZeugs"
        component={AddItemScreen}
        options={{
          tabBarLabel: 'Mein Zeugs',
          tabBarIcon: () => <TabIcon emoji="🏠" />,
        }}
      />
      <Tab.Screen
        name="Motivation"
        component={FavoritenScreen}
        options={{
          tabBarLabel: 'Motivation',
          tabBarIcon: () => <TabIcon emoji="⚡" />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    marginTop: -4,
  },
});
