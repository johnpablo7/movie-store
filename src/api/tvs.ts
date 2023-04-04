// ***** Como seria con Axios *****
import { TTvShow, TTvShowSmall } from "../types/tv";
import { API_KEY } from "../constants/api";
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

// GET /tv/{tv_id}

export async function getTvById(id: string) {
  const { data } = await api(`tv/${id}`);
  const show = data as TTvShow;
  return show;
}

export async function getTrendingTvShows() {
  const { data } = await api("trending/tv/day");
  const shows = data.results as TTvShowSmall[];
  return shows;
}

export async function getRelatedTvShowsById(id: string) {
  const { data } = await api(`tv/${id}/recommendations`);
  const relatedTvShows = data.results as TTvShowSmall[];
  return relatedTvShows;
}
