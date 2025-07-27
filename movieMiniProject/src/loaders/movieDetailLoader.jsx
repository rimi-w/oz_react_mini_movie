export async function movieDetailLoader({ params }) {
  const { movieId } = params;

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
  const movieDetailData = await res.json();

  return movieDetailData;
}
