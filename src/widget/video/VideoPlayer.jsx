import { useEffect, useRef, useState } from "react";
// import video from "./assets/video.mp4";
import { IconContext } from "react-icons";
import { BiPlay, BiSkipNext, BiSkipPrevious, BiPause } from "react-icons/bi";
import "./styles.css";

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState();
  const [duration, setDuration] = useState([0, 0]);
  const [durationSec, setDurationSec] = useState();

  const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };

  useEffect(() => {
    const { min, sec } = sec2Min(videoRef.current.duration);
    setDurationSec(videoRef.current.duration);
    setDuration([min, sec]);

    console.log(videoRef.current.duration);
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTimeSec(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="container">
      <div className="playerContainer">
        <video
          className="videoPlayer"
          controls
          ref={videoRef}
          src={video}
        ></video>
        <div className="controlsContainer">
          <div className="controls">
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
            {isPlaying ? (
              <button className="controlButton" onClick={handlePlay}>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <BiPause />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="controlButton" onClick={handlePlay}>
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                  <BiPlay />
                </IconContext.Provider>
              </button>
            )}
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <BiSkipNext />
            </IconContext.Provider>
            <div className="duration">
              {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={durationSec}
            default="0"
            value={currentTimeSec}
            className="timeline"
            onChange={(e) => {
              videoRef.current.currentTime = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
