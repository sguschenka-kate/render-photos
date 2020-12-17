import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { Loader } from './components/Loader';
import * as api from './api/fetchPhotos';
import { exclude } from './lib/exclude';

import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchPhotos() {
    const response = await api.fetchPhotos();
    setPhotos(response)
  }

  async function fetchData() {
    setLoading(true);
    await fetchPhotos();
    setLoading(false);
  }

  async function handleDelete(id) {
    await api.deletePhoto(id);
    const filteredPhotos = exclude({
      source: photos,
      key: id
    })
    setPhotos(filteredPhotos)
  }

  return (
    <div className="App">
      {loading && <Loader />}
      {!loading &&
        <>
          <ul className="list-group gap-3 flex-row flex-wrap justify-content-center align-items-center">
            {Object.values(photos).map(card =>
              <Card
                key={card.id}
                card={card}
                handleDelete={handleDelete}
              />
            )}
          </ul>
        </>
      }

    </div>
  );
}

export {
  App
}
