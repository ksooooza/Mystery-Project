import api from './apiConfig.js';

export const getArt = async () => {
    try {
        const response = await api.get("/museum");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getArtwork = async (id) => {
    try {
        const response = await api.get(`/museum/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createArt = async (artData) => {
    try {
        const response = await api.post("/museum", artData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateArt = async (id, artData) => {
    try {
        const response = await api.put(`/museum/${id}`, artData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteArt = async (id) => {
    try {
        const response = await api.delete(`/museum/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};