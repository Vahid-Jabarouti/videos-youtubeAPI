import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map((video, idx) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={idx} />
  })

  return <div className="ui relaxed divided list">
    {renderedList}
  </div>
}

export default VideoList;

