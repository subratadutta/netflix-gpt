import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTopRated } from '../utils/movieSlice';
import { useEffect } from 'react';

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRated = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    topRated();
  }, []);
};

export default useTopRated;
