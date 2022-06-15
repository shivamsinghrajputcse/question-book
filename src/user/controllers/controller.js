const app = require("../../app")

const addNewInstitute = (data) => {
    fetch("http://localhost:8080/api/v1/institute",
        {
            method: 'POST', // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


module.exports = {
    addNewInstitute
}