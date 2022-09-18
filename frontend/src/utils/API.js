import axios from 'axios';


const API_BASE_URL = process.env.REACT_APP_BACKEND_API_BASE_URL || 'http://localhost:8080';

export default axios.create({
  baseURL: API_BASE_URL
});
