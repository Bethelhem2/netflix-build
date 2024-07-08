import axios from "axios"
const instance = axios.create({
    // baseURL: "https://api.themoviedb.org/3",
// deployed version of netflix server on render.com
baseURL: "https://netflix-api-build.onrender.com"

});
export default instance;