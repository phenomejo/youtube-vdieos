import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((video, index) => {
        return <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
    })
    return (
        <div className="ui relaxed divided list">
            {videos.length > 0 ? renderList : null}
        </div>
    )
}

export default VideoList