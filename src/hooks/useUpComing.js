import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addUpComing } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpComing = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComing);

  const upComing = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpComing(json.results));
  };
  useEffect(() => {
    !upComingMovies && upComing();
  }, []);
};

export default useUpComing;
