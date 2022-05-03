const axios = require('axios');
import { HOST } from '../entities/api/host'

export const restService = {

    getPath: function (endpoints) {
        return `${HOST}${endpoints}`
    },

    get: function (endpoint){
        return axios.get(this.getPath(endpoint))
            .then(response => response.data)
            .catch(err => new Error(err))
    },

    post: function (endpoint){
        return axios.post(this.getPath(endpoint))
            .then(response => response.data)
            .catch(err => new Error(err))
    },

    put: function (endpoint){
        return axios.put(this.getPath(endpoint))
            .then(response => response.data)
            .catch(err => new Error(err))
    },

    delete: function (endpoint){
        return axios.delete(this.getPath(endpoint))
            .then(response => response.data)
            .catch(err => new Error(err))
    }
}
