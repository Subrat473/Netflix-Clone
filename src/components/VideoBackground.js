import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // Ensure this only runs when movieId changes (handled inside hook)

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo?.key) return null; // Prevent rendering if no trailer is found

  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video border-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
