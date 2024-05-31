import React from 'react';
import { IMDB_IMAGE_CDN_PATH } from '../utils/constant';

const MovieCard = ({ movieData }) => {
  if (!movieData.poster_path) return;
  return (
    <div className="w-32 md:w-48 m-2">
      <img alt={movieData.title} src={IMDB_IMAGE_CDN_PATH + movieData.poster_path} />
    </div>
  );
};

export default MovieCard;
