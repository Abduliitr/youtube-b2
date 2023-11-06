// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'

import tmkoc from './images/tmkoc.jpg'

function SuggestedVideos(props){
  let title = props.videoId;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
          <img src={tmkoc} title={title}/>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>
            <p class="track-title margin-0 video-info-title">Kalank Title Track - Lyrical | Alia Bhatt</p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  let videos = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div>
      {/* <p>Video comp</p>
      <h4>Time Left : {seconds}</h4> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src="https://www.youtube.com/embed/Grr0FlC8SQA?si=wzrbZX_JVDirQuKX?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='suggestions'>
          <p> Suggested Videos</p>
          {videos.map((videoId) => {
            return (<SuggestedVideos title={videoId} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Video

