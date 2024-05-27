import React from 'react';
import { IMDB_IMAGE_CDN_PATH } from '../utils/constant';

const MovieCard = ({ movieData }) => {
  console.log('1st Movie', movieData);

  return (
    <div className="w-48 m-2">
      <img alt={movieData.title} src={IMDB_IMAGE_CDN_PATH + movieData.poster_path} />
    </div>
  );
};

export default MovieCard;
