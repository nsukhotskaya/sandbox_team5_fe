import axios from 'axios';

const provider = axios.create({
  baseURL: 'http://petrov2021-001-site1.btempurl.com/',
  
});

provider.interceptors.request.use((config) => {
  const newConfig = config;
  const token = localStorage.getItem('accessToken');
  if (token) {
    newConfig.headers.Authorization = `bearer ${token}`;
  }

  return newConfig;
});

export default provider;
