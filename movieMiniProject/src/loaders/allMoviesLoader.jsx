export async function searchedMovieLoader({ request }) {
  const url = new URL(request.url);
  const movieName = url.searchParams.get(`name`);

  const { VITE_API_TOKEN } = import.meta.env;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${VITE_API_TOKEN}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=ko-KR`,
    options
  );
  const searchedMovies = await res.json();

  return searchedMovies.results;
}
