import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import MyStuff from './pages/MyStuff'
import CreateAd from './pages/CreateAd'

type Page = 'home' | 'my-stuff' | 'create';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'my-stuff':
        return <MyStuff />;
      case 'create':
        return <CreateAd />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Kleinanzeigen MVP</h2>
        <div className="nav-links">
          <button 
            onClick={() => setCurrentPage('home')}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Alle Anzeigen
          </button>
          <button 
            onClick={() => setCurrentPage('my-stuff')}
            className={currentPage === 'my-stuff' ? 'active' : ''}
          >
            Mein Zeugs
          </button>
          <button 
            onClick={() => setCurrentPage('create')}
            className={currentPage === 'create' ? 'active' : ''}
          >
            Anzeige erstellen
          </button>
        </div>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
