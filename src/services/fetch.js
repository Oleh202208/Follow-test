import axios from 'axios';

axios.defaults.baseURL = 'https://64352994537112453fcf0726.mockapi.io';

export async function fetchTweets() {
  const response = await axios.get('/users');
  return response.data;
}
