# Kleinanzeigen WebApp MVP

Eine einfache Kleinanzeigen-Plattform ohne Registrierung/Login-Funktion.

## Technologie-Stack

**Frontend:**
- React mit TypeScript
- Vite als Build-Tool

**Backend:**
- Node.js mit Express
- SQLite als dateibasierte Datenbank

## Features

- Anzeigen erstellen, anzeigen und löschen
- Kategorien und Standorte
- Preisangabe
- Bild-URL (Platzhalter für zukünftigen Upload)

## Installation & Start

### Backend

```bash
cd backend
npm install
npm start
```

Der Backend-Server läuft auf `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Das Frontend läuft auf `http://localhost:5173`

## API-Endpunkte

- `GET /api/items` - Alle Anzeigen abrufen
- `GET /api/items/:id` - Einzelne Anzeige abrufen
- `POST /api/items` - Neue Anzeige erstellen
- `PUT /api/items/:id` - Anzeige aktualisieren
- `DELETE /api/items/:id` - Anzeige löschen

## Hinweise

- Dies ist ein MVP ohne Authentifizierung
- Bild-Upload ist derzeit nur als URL-Eingabe implementiert
- Die SQLite-Datenbank wird automatisch beim ersten Start erstellt