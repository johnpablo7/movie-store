import { API_KEY, URL_API, URL_IMAGE } from "../constants/api";
import { TMovie } from "../types/movie";

// Trending
export async function getTrendingMoviesPreview() {
  const res = await fetch(`${URL_API}/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  const movies = data.results as TMovie[];
  return movies;
}

// Images
export function getImageUrl(width: number, path: string) {
  return URL_IMAGE + "/t/p/w" + width + path;
}
