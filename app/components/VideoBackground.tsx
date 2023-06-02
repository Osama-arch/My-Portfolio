import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const vidRef: any = useRef<HTMLVideoElement>();
  const setPlayBack = () => {
    vidRef.current.playbackRate = 0.8;
  };

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className=' vid-bg absolute bottom-0 left-0 z-0  w-full   md:bottom-auto md:top-0'>
      <video
        width='1600'
        height='894'
        loop
        autoPlay
        muted
        ref={vidRef}
        onCanPlay={() => setPlayBack()}
        className=' h-full  w-full opacity-40  mix-blend-multiply '>
        <source src='videos\video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
