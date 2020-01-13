import React from 'react';

const VideoDetail = ({video}) =>{

    if(!video){
        return(<div><h3>Loading...</h3></div>)
    }
    else{
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return(
            
        <div>
            <div className="ui embed" id="xyz12">
                <iframe title = "Video Player" src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        )
    }
}

export default VideoDetail;