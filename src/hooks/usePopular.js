import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addPopular } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopular = () => {
  const dispatch = useDispatch();
  const popular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    popular();
  }, []);
};

export default usePopular;
