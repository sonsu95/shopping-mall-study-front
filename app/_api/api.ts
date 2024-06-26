import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.API_URL}/`,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export { api };
