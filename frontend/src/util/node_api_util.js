import axios from 'axios';

export const createNode = (node) => {
  return axios.post('/api/nodes/', node);
};

export const getTreeNodes = (treeId) => {
  return axios.get(`/api/nodes/tree/${treeId}`);
};

export const deleteNode = (id) => {
  return axios.delete(`/api/nodes/${id}`);
};

export const updateNode = (id) => {
  return axios.patch(`/api/nodes/${id}`);
};