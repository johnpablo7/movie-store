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
import { API_KEY } from "../constants/api";
// import { API_KEY, URL_API } from "../constants/api"; // Fetch*
import { TCategory } from "../types/category";

// Categories (Axios)
export async function getCategoriesPreview() {
  const { data } = await api(`genre/movie/list`);
  // const data = await res.json();
  const categories = data.genres as TCategory[];
  return categories;
}

// Categories (Fetch)
// export async function getCategoriesPreview() {
//   const res = await fetch(`${URL_API}/3/genre/movie/list?api_key=${API_KEY}`);
//   const data = await res.json();
//   const categories = data.genres as TCategory[];
//   return categories;
// }
