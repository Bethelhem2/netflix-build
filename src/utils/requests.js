// const dotenv = require("dotenv");
// dotenv.config();
const REACT_APP_API_KEY = '9246a4f2a603e6fdf50093ea8881d4ce';


//  const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchNetflexOriginals: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchActionMOvies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMOvies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_geners=35`,
    fetchAdventureMOvies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_geners=12`,
    fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_geners=27`,
    fetchDocumentaries: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_geners=99`,

};

export default requests;



// hosting url and project console : Project Console: https://console.firebase.google.com/project/netflix-clone-96777/overview
//                                   Hosting URL: https://netflix-clone-96777.web.app

