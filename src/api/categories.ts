import { API_KEY, URL_API } from "../constants/api";
import { TCategory } from "../types/category";

// Categories
export async function getCategoriesPreview() {
  const res = await fetch(`${URL_API}/3/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  const categories = data.genres as TCategory[];
  return categories;
}
