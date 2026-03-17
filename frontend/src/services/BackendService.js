const API_BASE_URL = 'http://localhost:8080/api';

export const BackendService = {
  // Auth
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // Resources
  getResources: async () => {
    const response = await fetch(`${API_BASE_URL}/resources`);
    return response.json();
  },

  uploadResource: async (resourceData) => {
    const response = await fetch(`${API_BASE_URL}/resources`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resourceData),
    });
    return response.json();
  },

  searchResources: async (title) => {
    const response = await fetch(`${API_BASE_URL}/resources/search?title=${title}`);
    return response.json();
  },

  filterResources: async (program, type) => {
    let url = `${API_BASE_URL}/resources/filter?`;
    if (program) url += `degreeProgram=${program}&`;
    if (type) url += `resourceType=${type}`;
    const response = await fetch(url);
    return response.json();
  }
};
