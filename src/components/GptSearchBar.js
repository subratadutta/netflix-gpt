import React, { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGPTMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const searchRext = useRef(null);
  const dispatch = useDispatch();
  const searchTMDBMovie = async (movieName) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=true&page=1',
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearchClick = async () => {
    const formGPTQuery =
      'Act as a Movie recommendation system and suggest some movies for the query: ' +
      searchRext.current.value +
      'only give me name of 5 movies in comma separated values like Don, Sholay, Gadar, Golden Eye';
    const gptCompleteion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: formGPTQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptCompleteion.choices) {
      // Do Error Handling & show messages
    }
    const getMovies = gptCompleteion.choices[0].message.content.split(',').map((item) => item.trim());
    console.log('GPT Results', getMovies);
    if (getMovies.length) {
      const moviePromises = getMovies.map((movie) => searchTMDBMovie(movie));
      const resultData = await Promise.all(moviePromises);
      console.log('Final Data', resultData);
      dispatch(addGPTMovieResults({ movieNames: getMovies, movieResults: resultData }));
    }
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchRext}
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder="What would you like to watch?"
        />
        <button className="py-2 px-4 m-4 bg-red-600 text-white col-span-3" onClick={handleGPTSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
