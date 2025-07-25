import { create } from "zustand";

export const useMovieListStore = create((set) => ({
  movieList: [],
  isLoading: false,
  getMovieList: async (category) => {
    try {
      set({ isLoading: true });
      const { VITE_API_TOKEN } = import.meta.env;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${VITE_API_TOKEN}`,
        },
      };
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
        options
      );
      const data = await res.json();
      if (res.ok) {
        set({ movieList: data.results });
      }
    } catch (error) {
      console.log(`error : `, error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export const useMovieDetailDataStore = create((set) => ({
  movieDetailData: {},
  isLoading: false,
  getMovieDetailData: async (movieId) => {
    try {
      set({ isLoading: true });
      const { VITE_API_TOKEN } = import.meta.env;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${VITE_API_TOKEN}`,
        },
      };
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
        options
      );
      const data = await res.json();
      if (res.ok) {
        set({ movieDetailData: data });
      }
    } catch (error) {
      console.log(`error : `, error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
