import axios from 'axios'

export const getArt = async () => {
    try {
        const response = await axios ("https://metmuseumapi-production.up.railway.app/museum");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getArtwork = async (id) => {
    try {
        const response = await axios (`https://metmuseumapi-production.up.railway.app/museum/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createArt = async (artData) => {
    try {
        const response = await axios ("https://metmuseumapi-production.up.railway.app/museum", artData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateArt = async (id, artData) => {
    try {
        const response = await axios (`https://metmuseumapi-production.up.railway.app/museum/${id}`, artData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteArt = async (id) => {
    try {
        const response = await axios (`https://metmuseumapi-production.up.railway.app/museum/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};