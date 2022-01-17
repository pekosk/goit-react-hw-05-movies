import axios from 'axios';

const API_KEY = '3d50889397bf5e463d1a342f1c673f88';
const BASE_URL = 'https://api.themoviedb.org/3/';
const params = { api_key: API_KEY };

function getPopular() {
  return axios.get(`${BASE_URL}movie/popular`, { params });
}

function getDetails(movieId) {
  return axios.get(`${BASE_URL}movie/${movieId}`, { params });
}

function getCast(movieId) {
  return axios.get(`${BASE_URL}movie/${movieId}/credits`, { params });
}

function getReviews(movieId) {
  return axios.get(`${BASE_URL}movie/${movieId}/reviews`, { params });
}

function getMovieByName(query) {
  return axios.get(`${BASE_URL}search/movie`, { params: { ...params, query } });
}

const moviesAPI = {
  getPopular,
  getDetails,
  getCast,
  getReviews,
  getMovieByName,
};

export default moviesAPI;
