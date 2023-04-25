// import { API_KEY, URL_API, URL_IMAGE } from "../constants/api"; // Fetch*
import { TMovie, TMovieSmall } from "../types/movie";
import { API_KEY, URL_IMAGE } from "../constants/api";
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

// GET /movie/{movie_id}
export async function getMovieById(id: string) {
  const { data } = await api(`movie/${id}`);
  const movie = data as TMovie;
  return movie;
}

export async function getTrendingMoviesAll() {
  const { data } = await api("trending/all/day");
  const movies = data.results as TMovieSmall[];
  return movies;
}

export async function getTrendingMovies() {
  const { data } = await api("trending/movie/day");
  const movies = data.results as TMovieSmall[];
  return movies;
}

// Paginación y Scroll infinito
export async function getPaginatedTrendingMovies() {
  const { data } = await api("trending/movie/day", {
    params: {
      page: 2,
    },
  });
  const movies = data.results as TMovieSmall[];
  return movies;
}

export async function getRelatedMoviesById(id: string) {
  const { data } = await api(`movie/${id}/recommendations`);
  const relatedMovies = data.results as TMovieSmall[];
  return relatedMovies;
}

export async function getUpComingMovies() {
  const { data } = await api("movie/upcoming");
  const comingMovies = data.results as TMovieSmall[];
  return comingMovies;
}

export async function getMovieByCategory(id: string) {
  const { data } = await api("discover/movie", {
    params: {
      with_genres: id,
    },
  });
  const category = data.results as TMovieSmall[];
  return category;
}

export async function getMovieBySearch(query: string) {
  const { data } = await api("search/movie", {
    params: {
      query,
    },
  });
  const search = data.results as TMovieSmall[];
  return search;
}

// Images
export function getImageUrl(width: number, path: string) {
  return URL_IMAGE + "/t/p/w" + width + path;
}

// Trending (Fetch)
// export async function getTrendingMovies() {
//   const res = await fetch(`${URL_API}/3/trending/movie/day?api_key=${API_KEY}`);
//   const data = await res.json();
//   const movies = data.results as TMovie[];
//   return movies;
// }
