import axios from 'axios';

export const createTree = (tree) => {
  return axios.post('/api/trees/', tree);
};

export const getTrees = () => {
  return axios.get('/api/trees/');
};

export const getTree = (id) => {
  return axios.get(`/api/trees/${id}`);
};

export const updateTree = (id) => {
  return axios.patch(`/api/trees/${id}`);
};

export const deleteTree = (id) => {
  return axios.delete(`/api/trees/${id}`);
};

export const getUsersTrees = (userId) => {
  return axios.get(`/api/trees/user/${userId}`);
};