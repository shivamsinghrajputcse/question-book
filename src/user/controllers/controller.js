const app = require("../../app")
const axios = require('axios').default;

const addNewInstitute = async (data, origin) => {
    fetch(origin + "/api/v1/institute",
        {
            method: 'POST', // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}

const getAllInstitute = async (origin) => {
    try {
        const response = await axios.get(origin + "/api/v1/institute");
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    addNewInstitute,
    getAllInstitute
}