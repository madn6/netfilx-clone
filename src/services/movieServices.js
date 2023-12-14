const KEY = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endPoints = {
	popular: `${baseUrl}/movie/popular?api_key=${KEY}`,
	topRated: `${baseUrl}/movie/top_rated?api_key=${KEY}`,
	trending: `${baseUrl}/movie/popular?api_key=${KEY}&language=en-US&page=2`,
	comedy: `${baseUrl}/search/movie?api_key=${KEY}&language=en-US&query=comedy&page=1&include_adult=false`,
	upcomming: `${baseUrl}/movie/upcoming?api_key=${KEY}`,
};

export function createImageUrl(filename, size) {
	return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endPoints;
