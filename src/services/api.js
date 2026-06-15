const BASE_URL = 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

export const authService = {
  login: (email, password) =>
    fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(r => r.json()),

    register: (username, email, password) =>
      fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      }).then(r => r.json()),
};

export const todoService = {
  getAll: () =>
    fetch(`${BASE_URL}/todos`, { headers: headers() }).then(r => r.json()),

  create: (todo) =>
    fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(todo),
    }).then(r => r.json()),

  update: (id, data) =>
    fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(data),
    }).then(r => r.json()),

  delete: (id) =>
    fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: headers(),
    }).then(r => r.json()),
};
