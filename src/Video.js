// rfce

import React, { useEffect, useState } from 'react'

function Video() {
    const [seconds, setSeconds] = useState(10);
    const targetTime = Math.floor((new Date()).getTime()/1000  + 10);       // + 30 seconds

    // when page renders
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Math.floor((new Date()).getTime()/1000);
            const remainingTime = targetTime - currentTime;

            if(remainingTime >= 0){
                setSeconds(remainingTime);
            }     
        }, 1000)
    }, [])

  return (
    <div>
      <p>Video comp</p>
      <h4>Time Left : {seconds}</h4>
    </div>
  )
}

export default Video

