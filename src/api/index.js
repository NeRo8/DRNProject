import axios from 'axios';

const baseAPI = axios.create({
  baseURL: '',
});

export const setToken = token => {
  baseAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //teslaApi.defaults.headers.common['Accept-Language'] = 'ru';
};

export const deleteToken = () => {
  delete baseAPI.defaults.headers.common['Authorization'];
};

export default baseAPI;
