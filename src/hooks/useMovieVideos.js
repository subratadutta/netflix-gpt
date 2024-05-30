import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideos } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieVideos = (movie_id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/videos', API_OPTIONS);
    const json = await data.json();
    const filterdTrailerData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterdTrailerData.length
      ? filterdTrailerData[Math.floor(Math.random() * filterdTrailerData.length)]
      : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieVideos;
