import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38102886-045479c2900973c57f82fbd15';
axios.defaults.params = {
  key: API_KEY,
};

export const getData = async params => {
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
