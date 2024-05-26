
import axios from 'axios';


const username = 'coalition';
const password = 'skills-test';

// Encoding the username and password using Base64
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

export const fetchUserDetails = async () => {
  try {
    const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
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