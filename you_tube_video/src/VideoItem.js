import React from 'react';


const VideoItem = ({video,onVideoSelect}) => {
   const xyz = () =>{
        onVideoSelect(video)
    }
    return(
        <div className="video-item item" onClick = {xyz}>
            <img alt = {video.snippet.title} src={video.snippet.thumbnails.high.url} className="ui image" />
            <div className="content">
                <div className="header">
                    <h3>{video.snippet.title}</h3>
                    {/* <h4>{video.snippet.description}</h4> */}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;