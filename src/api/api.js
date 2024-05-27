
import axios from 'axios';

const username = import.meta.env.VITE_KEY_USERNAME;
const password = import.meta.env.VITE_KEY_PASSWORD;
const apiUrl = import.meta.env.VITE_KEY_BASE_URL;

// Encoding the username and password using Base64
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

export const fetchUserDetails = async () => {
  try {
      const response = await axios.get(`${apiUrl}`, {
      headers: {
        'Authorization': `Basic ${encodedCredentials}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
