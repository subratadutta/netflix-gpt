import React from 'react';

const VideoTitle = ({ title, overview }) => {
  const playIcon = `${process.env.PUBLIC_URL}/play_icon.png`;
  const infoIcon = `${process.env.PUBLIC_URL}/info_icon.png`;
  return (
    <div className="absolute pt-80 px-12 text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-black w-28 text-lg rounded border border-solid border-black py-2 pr-2 hover:bg-opacity-80">
          <span className="flex flex-wrap">
            <img alt="Play" src={playIcon} className="w-6 h-7 ml-4 mr-2"></img>Play
          </span>
        </button>
        <button className=" bg-[#9e918d] text-white w-36 text-lg rounded border border-solid border-[#756d6a] py-2 ml-2 hover:bg-opacity-80">
          <span className="flex flex-wrap">
            <img alt="Play" src={infoIcon} className="w-6 h-7 ml-4 mr-2"></img>More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
