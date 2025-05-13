import React, { useEffect, useRef } from 'react'
import './App.css'
import Weather from './Components/Weather/Weather'

function App() {
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6
        }
    }, [])

    return (
        <div className='app'>
            <video className='video' ref={videoRef} src='cloud.mp4' autoPlay muted loop></video>
            <Weather />
        </div>
    )
}

export default App
