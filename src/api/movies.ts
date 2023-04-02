// ***** Como seria con Axios *****
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

// ************************************************************************
import { API_KEY, URL_IMAGE } from "../constants/api";
// import { API_KEY, URL_API, URL_IMAGE } from "../constants/api"; // Fetch*
import { TMovie, TTrendingMovie } from "../types/movie";

// Trending (Axios)
export async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  // const data = await res.json();
  const movies = data.results as TTrendingMovie[];
  return movies;
}

export async function getMovieById(id: string) {
  const { data } = await api(`movie/${id}`);
  const movie = data as TMovie;
  return movie;
}

export async function getMovieByCategory(id: string) {
  const { data } = await api("discover/movie", {
    params: {
      with_genres: id,
    },
  });
  const category = data.results as TTrendingMovie[];
  return category;
}

// Trending (Fetch)
// export async function getTrendingMoviesPreview() {
//   const res = await fetch(`${URL_API}/3/trending/movie/day?api_key=${API_KEY}`);
//   const data = await res.json();
//   const movies = data.results as TMovie[];
//   return movies;
// }

// Images
export function getImageUrl(width: number, path: string) {
  return URL_IMAGE + "/t/p/w" + width + path;
}
