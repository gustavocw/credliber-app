import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

export default ApiInstance;
