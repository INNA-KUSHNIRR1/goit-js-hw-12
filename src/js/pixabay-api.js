//У файлі pixabay-api.js зберігай функції для HTTP-запитів.
import axios from 'axios';

const API_KEY = '43226566-fed9ea78cdf96918d4e965adc';
const URL = 'https://pixabay.com/api/';
let perPage = 15;
let pageCurrent = 2;

export default async function getImagesFromApi(text = '') {
  const parameters = new URLSearchParams({
    per_page: perPage,
    page: pageCurrent,
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await axios.get(`${URL}?${parameters}`);
  return response.data;
  console.log(response.data);
}

// export default function getImagesFromApi(text = '') {
//   const parameters = new URLSearchParams({
//     key: API_KEY,
//     q: text,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });
//   return fetch(`${URL}?${parameters}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
