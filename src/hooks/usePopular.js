import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addPopular } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopular = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popular);

  const popular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    !popularMovies && popular();
  }, []);
};

export default usePopular;
