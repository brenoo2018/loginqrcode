import api from './api';
export const login = async (credentials) => {
  const response = await api.post('/sessions', credentials);

  return response.data;
};
