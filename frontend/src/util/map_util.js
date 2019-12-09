import axios from 'axios';

export const reverseGeolocation = crd => {
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${crd.longitude},${crd.latitude}.json?access_token=pk.eyJ1IjoianVubmFjIiwiYSI6ImNrMnFxbjN6dDBodGwzbHBnOHo3a2JyOGkifQ.aFvV6CS-cHtsRT5Qvz2Z3w`)
}