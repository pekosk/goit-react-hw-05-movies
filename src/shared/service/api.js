import axios from "axios";

const API_KEY = 'e7920edacf2615b53852bc04e3a109f1';
const BASE_URL = 'https://api.themoviedb.org/3';

const instnce = axios.create({
    baseURL: BASE_URL,
});

const getPopular = () => {
    return instnce.get(`/trending/movie/day?api_key=${API_KEY}`)
};

const getSearch = (name) => {
    return instnce.get(`/search/movie?api_key=${API_KEY}`, {
        params: {
            query: name,
            language: 'en-US',
            page: 1,
            include_adult: false,
        }
    })
};

const getDetails = (id) => {
    return instnce.get(`/movie/${id}?api_key=${API_KEY}`, {
        params: {
            language: 'en-US'
        }
    })
}

const getCredits = (id) => {
    return instnce.get(`/movie/${id}/credits?api_key=${API_KEY}`, {
        params: {
            language: 'en-US'
        }
    })
}

const getReviews = (id) => {
    return instnce.get(`/movie/${id}/reviews?api_key=${API_KEY}`, {
        params: {
            language: 'en-US'
        }
    })
}

export const ApiService = {
    getPopular,
    getSearch,
    getDetails,
    getCredits,
    getReviews
}