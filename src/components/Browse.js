import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const gptToggle = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header />
      {gptToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
