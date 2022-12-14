import React from'react';


const VideoDetail= ({video})=> {
if (!video) {
    return <div>Loading..</div>
}

const videoSrc= 'https://www.youtube.com/embed/'

    return(
        <div>
            <div className='ui embed'>
                <iframe title="video player"src={videoSrc+video.id.videoId}/>
            </div>
         <div className='ui segment ' >
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.descrrption}</p>
         </div>
        </div>
           
    )
}

export default VideoDetail