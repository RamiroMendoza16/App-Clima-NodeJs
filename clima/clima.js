const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8e7b63d4e3498aded9a8135084330265&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}