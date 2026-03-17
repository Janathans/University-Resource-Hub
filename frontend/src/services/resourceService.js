const API_BASE_URL = 'http://localhost:8080/api/resources';

const resourceService = {
    getAllResources: async () => {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch resources');
        return response.json();
    },

    getResourceById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) throw new Error('Resource not found');
        return response.json();
    },

    searchResources: async (query) => {
        const response = await fetch(`${API_BASE_URL}/search?title=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Search failed');
        return response.json();
    },

    filterResources: async (program, type) => {
        let url = `${API_BASE_URL}/filter?`;
        if (program && program !== 'All Programs') url += `degreeProgram=${encodeURIComponent(program)}&`;
        if (type && type !== 'All Types') url += `resourceType=${encodeURIComponent(type.toUpperCase().replace(' ', '_'))}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Filter failed');
        return response.json();
    }
};

export default resourceService;
