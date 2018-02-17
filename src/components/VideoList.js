import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos }) => {
  const videoListItems = videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />
  })

  return (
    <ul className="col-md-4 list-group">
      {videoListItems}
    </ul>
  )
}

export default VideoList