import apiUrl from "./apiConfig.js";

export const getArt = async () => {
    try {
        const response = await apiUrl.get('/')
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getArtwork = async (id) => {
    try {
        const response = await apiUrl.get(`/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createArt = async (artData) => {
    try {
        const response = await apiUrl.post(`/`, artData)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateArt = async (id, artData) => {
    try {
        const response = await apiUrl.put(`/${id}`, artData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteArt = async (id) => {
    try {
        const response = await apiUrl.delete(`/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};