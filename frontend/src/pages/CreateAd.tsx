import { useState } from 'react';
import '../App.css';

function CreateAd() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
    image_url: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: formData.price ? parseFloat(formData.price) : null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create item');
      }

      setMessage({ type: 'success', text: 'Anzeige erfolgreich erstellt!' });
      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        location: '',
        image_url: '',
      });
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1>Neue Anzeige erstellen</h1>
      
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label htmlFor="title">Titel *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="z.B. Fahrrad, Möbel, etc."
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Beschreibung</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            placeholder="Beschreibe dein Angebot..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Preis (€)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            placeholder="Preis eingeben"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Kategorie</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Kategorie wählen...</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Möbel">Möbel</option>
            <option value="Kleidung">Kleidung</option>
            <option value="Fahrzeuge">Fahrzeuge</option>
            <option value="Bücher">Bücher</option>
            <option value="Sport">Sport</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Standort</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="z.B. Berlin, München, etc."
          />
        </div>

        <div className="form-group">
          <label htmlFor="image_url">Bild-URL (Platzhalter)</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="https://example.com/bild.jpg"
          />
          <small className="form-hint">
            Hinweis: Bild-Upload-Funktion wird später implementiert. 
            Verwende vorerst einen Bild-Link.
          </small>
        </div>

        {message && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <button type="submit" disabled={submitting} className="submit-button">
          {submitting ? 'Wird erstellt...' : 'Anzeige erstellen'}
        </button>
      </form>
    </div>
  );
}

export default CreateAd;
