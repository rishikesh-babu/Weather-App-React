import React from 'react'
import './App.css'
import Weather from './Components/Weather/Weather'

function App() {
    return (
        <div className='app'>
            <video className='video' src='cloud.mp4' autoPlay muted loop></video>
            <Weather />
        </div>
    )
}

export default App
