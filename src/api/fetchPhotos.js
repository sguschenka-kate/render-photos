import { convert } from '../lib/convert';

async function fetchPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
  })
  const data = await response.json();
  return convert(data)
}

export {
  fetchPhotos
}