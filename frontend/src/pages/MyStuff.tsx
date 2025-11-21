import { useEffect, useState } from 'react';
import '../App.css';

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  image_url: string;
  created_at: string;
}

function MyStuff() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/items');
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: number) => {
    if (!confirm('Möchtest du diese Anzeige wirklich löschen?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Refresh the list
      fetchItems();
    } catch (err) {
      alert('Fehler beim Löschen: ' + (err instanceof Error ? err.message : 'Unbekannter Fehler'));
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Meine Anzeigen</h1>
      
      {items.length === 0 ? (
        <p>Du hast noch keine Anzeigen erstellt.</p>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-placeholder">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.title} />
                ) : (
                  <div className="no-image">Kein Bild</div>
                )}
              </div>
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="item-price">{item.price ? `${item.price} €` : 'Preis auf Anfrage'}</p>
                <p className="item-location">{item.location || 'Keine Standortangabe'}</p>
                <p className="item-category">{item.category || 'Keine Kategorie'}</p>
                <p className="item-description">{item.description}</p>
                <button 
                  onClick={() => deleteItem(item.id)} 
                  className="delete-button"
                >
                  Löschen
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyStuff;
