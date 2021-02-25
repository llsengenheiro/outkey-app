import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.20.41:5000/',
});

export default api;
