import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchPosts = async (page) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, { params: { page } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
