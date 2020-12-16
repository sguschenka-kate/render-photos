import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { Loader } from './components/Loader';
import * as api from './api/fetchPhotos';

import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // console.log(photos)
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

  return (
    <div className="App">
      {loading && <Loader />}
      {!loading &&
        <ul className="list-group flex-row flex-wrap justify-content-center align-items-center">
          {Object.values(photos).map(card =>
            <Card
              key={card.id}
              card={card}
            />
          )}
        </ul>
      }

    </div>
  );
}

export default App;
