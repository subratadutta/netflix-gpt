import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
