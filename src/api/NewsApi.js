import axios from "axios";

const API_KEY = 'd06d57d0181763e4bc809a3a509275e8';
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchLatestNews = () => {
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      lang: 'en',
      max: 10,
      token: API_KEY 
    }
  });
};

