import { convert } from '../lib/convert.js';

async function fetchPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
  })
  const data = await response.json();

  return convert(data.slice(0, 20))
}

async function deletePhoto(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json();
  return data
}

export {
  fetchPhotos, deletePhoto
}