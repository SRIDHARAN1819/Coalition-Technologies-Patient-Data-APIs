
import axios from 'axios';



const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;
const apiUrl = process.env.REACT_APP_BASE_URL;

// Encoding the username and password using Base64
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

export const fetchUserDetails = async () => {
  try {
    // const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
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