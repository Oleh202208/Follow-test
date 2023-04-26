import axios from 'axios';

axios.defaults.baseURL = 'https://64352994537112453fcf0726.mockapi.io';
const perPage = 3;

export async function fetchTweets(page) {
  const response = await axios.get('/users', {
    params: {
      page,
      limit: perPage,
    },
  });
  return response.data;
}

export async function fetchFollow(user) {
  const response = await axios.put(`/users/${user.id}`, user);
  return response.data;
}
