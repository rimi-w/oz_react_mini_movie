import { nowPlayingMoviesLoader } from "./nowPlayingMoviesLoader";
import { popularMoviesLoader } from "./popularMoviesLoader";
import { topRatedMoviesLoader } from "./topRatedMoviesLoader";
import { upcomingMoviesLoader } from "./upcomingMoviesLoader";

export async function mainPageLoader() {
  const [nowPlaying, upcoming, topRated, popular] = await Promise.all([
    nowPlayingMoviesLoader(),
    upcomingMoviesLoader(),
    topRatedMoviesLoader(),
    popularMoviesLoader(),
  ]);
  return { nowPlaying, upcoming, topRated, popular };
}
