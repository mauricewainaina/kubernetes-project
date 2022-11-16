const API_KEY = "7f9a3c3ec139b3754eeb4ccaf62af663";

const requests = {
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`
}



export default requests;

