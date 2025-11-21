# B2G App - Layout Implementation

This document describes the implementation of the app layout based on the provided design mockups.

## Screens Implemented

### 1. Favoriten (Favorites) Screen
Location: `src/screens/FavoritenScreen.tsx`

Features:
- **Header**: Brown/orange color scheme with "Favoriten" title and "Nur Freunde" button
- **Tab Switcher**: Toggle between "Zu Verleihen (12)" and "zu verschenken (10)"
- **Item List**: Displays items with:
  - Item image (using emoji placeholders)
  - Item title and subtitle
  - Bookmark icon for favorites
  - Card-based layout with shadows

### 2. Add Item Screen (Gegenstand hinzufügen)
Location: `src/screens/AddItemScreen.tsx`

A 3-step form flow:

#### Step 1/3: Art der Vergabe (Type of Transaction)
- Two options: "Zu verleihen" (to lend) or "Zu verschenken" (to give away)
- Visibility settings: "Öffentlich" (Public) or "Nur Freunde" (Friends only)
- Informational text about community rules

#### Step 2/3: Details zum Artikel (Item Details)
- Category selection with icons:
  - 🚗 Fahrzeuge (Vehicles)
  - 🎵 Musik (Music)
  - ⚽ Sport
  - 📚 Bücher (Books)
  - 📺 Elektronik (Electronics)
- Text fields for:
  - Artikelbezeichnung (Item name)
  - Beschreibung (Description)
  - Zustand (Condition)
  - Gewicht (Weight in kg)
  - Maße (Dimensions: Length, Width, Height in mm)

#### Step 3/3: Bilder (Images)
- Image upload interface with 4 slots
- First slot shows uploaded image with delete button
- Remaining slots show upload placeholders

### 3. Components

#### FilterButtons Component
Location: `src/components/FilterButtons.tsx`

Features:
- "Filter anwenden (6)" button - brown background
- "Filter löschen" button - white background with border

#### FilterIcons Component
Location: `src/components/FilterIcons.tsx`

Features:
- "Alle Ergebnisse" icon (🌍 - globe)
- "Nur Freunde" icon (👥 - people)

### 4. Navigation

#### Bottom Tab Navigator
Location: `src/navigation/BottomTabNavigator.tsx`

Five tabs with brown background:
1. ❤️ Favourite
2. 🤝 Mein Deals
3. 🔍 Search (centered, larger icon)
4. 🏠 Mein Zeugs
5. ⚡ Motivation

## Design System

### Colors
Location: `src/theme/colors.ts`

```typescript
primary: '#A67C52'      // Brown
primaryDark: '#8B6B47'  // Darker brown
primaryLight: '#C19A6B' // Lighter brown
gold: '#D4A574'         // Gold for buttons
background: '#FFFFFF'   // White
lightGray: '#F5F5F5'    // Light gray backgrounds
```

### Typography
- Header titles: 24px, bold, white on brown background
- Section titles: 18px, semi-bold
- Body text: 14-16px
- Tab labels: 10-12px

### Layout Patterns
- Card-based item display with rounded corners (12px border radius)
- Consistent padding (16px for main containers)
- Shadow effects on cards for depth
- Rounded buttons (25px border radius)
- Emoji icons for visual interest

## Running the App

### Prerequisites
```bash
npm install
```

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Development Server
```bash
npm start
```

## Testing
```bash
npm test
```

## Linting
```bash
npm run lint
```

## Notes

- The app uses React Native 0.82.1
- Navigation is implemented with React Navigation v6
- Mock data is used for demonstration purposes
- Emoji placeholders are used instead of actual images
- The design closely follows the provided mockups with brown/orange color scheme
