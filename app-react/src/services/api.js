import axios from 'axios';
import { store } from '~/store';
import { signOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.response.use(
  response => response,
  error => {
    let status = 0;
    let message = '';

    if (error && error.response && error.response.status) {
      status = error.response.status;
      message = error.response.data.message;
    }

    if (status === 401) {
      store.dispatch(signOut());
    }

    return Promise.reject({ ...error, status, message });
  }
);

export default api;
