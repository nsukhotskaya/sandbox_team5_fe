import axios from 'axios';

const API = axios.create({
  baseURL: 'http://exadelteamfive.somee.com/',
});

export const authorizationPostRequest = (user) => {
  API.post('api/authenticate', user);
};
