import axios from 'axios';

const API_KEY =
  'live_NFKKD7pLbJ1acajJ2qqjW85ySxYJkwsU208fB0UjsgAOIDcnMm1NxNz5szzsQaHh';
const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(responce => {
      return responce.data;
    });
}
