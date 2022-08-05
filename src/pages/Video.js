
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Video = () => {
    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: "user"
    }

    const startCam = () => {
        setIsShowVideo(true);
    }

    const stopCam = () => {
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsShowVideo(false);
    }
  return (
    <div className='video-container '>
        <div className="text-center">
            <div className="camView pt-5" >
                    {isShowVideo &&
                        <Webcam className='webcam' audio={true} ref={videoElement} videoConstraints={videoConstraints} />
                    }
            </div>
            <div className='cambtn pt-5 text-center '  >
                <button onClick={startCam}>Start Video</button>
                <button onClick={stopCam}>Stop Video</button>

            </div>

        </div>
        
    </div>
  )
}

export default Video