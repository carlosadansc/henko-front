import axios from 'axios';

export default {
    async getProperties(searchData) {
        return await axios.post('properties/', searchData).then(response => response.data);
    },
    async getProperty(propertyId) {
        return await axios.get('property/' + propertyId).then(response => response.data);
    },
};