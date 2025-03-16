const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-1/4 px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg max-w-lg">{overview}</p>
      <div className="my-4 md:m-0 flex gap-2">
        <button 
          className="bg-white text-black py-2 md:py-4 px-4 md:px-12 text-xl rounded-lg hover:bg-opacity-80"
          aria-label="Play Video"
        >
          ▶️ Play
        </button>
        <button 
          className="hidden md:inline-block bg-gray-500 text-white py-2 md:py-4 px-6 md:px-12 text-xl bg-opacity-50 rounded-lg"
          aria-label="More Info"
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
