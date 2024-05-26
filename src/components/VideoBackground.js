import React from 'react';
import { useSelector } from 'react-redux';
import useMovieVideos from '../hooks/useMovieVideos';

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);
  useMovieVideos(movie_id);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={'https://www.youtube.com/embed/' + trailerVideo?.key + '?si=vCbMXflU-QJIKx-V&autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
