import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACK_BG } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACK_BG} alt="body" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
