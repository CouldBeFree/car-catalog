import axiosInstance from './axiosConfig';

export default {
    getCars(query) {
        return axiosInstance.get('/cars', { params: {...query} });
    },
    getCarById(id) {
        return axiosInstance.get(`/cars/${id}`);
    }
};
