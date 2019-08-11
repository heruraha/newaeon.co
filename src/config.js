const environment = 'dev';

export const API_URL = environment === 'dev' ? 'http://localhost:8081/api': 'http://dev.tarot-api.newaeon.co/api';

export const ENDPOINTS = {
    GET_ENDPOINT: '/fake/endpoint'
}