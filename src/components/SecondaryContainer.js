import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="relative mt-0 md:-mt-[147px] z-20 pl-4 md:pl-12 ">
        {movies.nowPlayingMovies && <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />}
        {movies.popular && <MovieList title="Popular" movies={movies.popular} />}
        {movies.topRated && <MovieList title="Top Rated" movies={movies.topRated} />}
        {movies.upComing && <MovieList title="Up Coming" movies={movies.upComing} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;
