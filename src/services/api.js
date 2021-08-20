import axios from 'axios';

const API_BASE_URL = 'https://akabab.github.io/superhero-api/api/';
const API_CDN_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

axios.defaults.baseURL = API_BASE_URL;

// eslint-disable-next-line import/prefer-default-export
export const fetchHeroes = async () => (await axios.get('all.json')).data;
