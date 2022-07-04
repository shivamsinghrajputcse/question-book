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
    // console.log(origin);
    try {
        const response = await axios.get("http://localhost:8080/api/v1/institute");
        return response;
    } catch (error) {
        return error;
    }
}

const addNewSession = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/v1/session", data);
        return response;
    } catch (error) {
        return error;
    }
}

const addNewBarnch = asyna(data => {
    try {
        const response = await axios.post("http://localhost:8080/api/v1/branch", data);
        return response;
    } catch (error) {
        return error;
    }
})

module.exports = {
    addNewInstitute,
    getAllInstitute,
    addNewSession
}