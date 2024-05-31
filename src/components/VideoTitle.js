import React from 'react';

const VideoTitle = ({ title, overview }) => {
  const playIcon = `${process.env.PUBLIC_URL}/play_icon.png`;
  const infoIcon = `${process.env.PUBLIC_URL}/info_icon.png`;
  return (
    <div className="absolute pt-40 md:pt-80 px-6 md:px-12 text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-4xl md:font-bold">{title}</h1>
      <p className="hidden md:inline-block md:py-6 md:text-sm md:w-1/4">{overview}</p>
      <div className="pt-2 md:pt-0">
        <button className=" bg-white text-black w-16 md:w-28 text-sm md:text-lg rounded border border-solid border-black py-0 md:py-2 pr-2 hover:bg-opacity-80">
          <span className="flex flex-wrap">
            <img alt="Play" src={playIcon} className="w-2 md:w-6 h-4 md:h-7 ml-1 pt-1 md:ml-4 mr-2"></img>Play
          </span>
        </button>
        <button className=" bg-[#9e918d] text-white w-24 md:w-36 text-sm md:text-lg rounded border border-solid border-[#756d6a] py-0 md:py-2 ml-0 md:ml-2 hover:bg-opacity-80">
          <span className="flex flex-wrap">
            <img alt="Play" src={infoIcon} className="w-2 md:w-6 h-4 md:h-7 ml-1 pt-1 md:ml-4 mr-2"></img>More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
