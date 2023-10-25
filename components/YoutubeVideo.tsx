// ts
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function YoutubeVideo({videoId=""}) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}