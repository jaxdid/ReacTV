import React from 'react'

const VideoListItem = ({ video, onSelectVideo }) => {
  const { thumbnails, title } = video.snippet
  
  return (
    <li className="list-group-item" onClick={() => onSelectVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem 