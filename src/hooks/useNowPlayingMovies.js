import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlaying && nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
