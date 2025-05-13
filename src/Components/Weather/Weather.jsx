import axios from "axios";
import './Weather.css'
import React, { useEffect, useRef, useState } from "react";

export default function Weather() {
    const [data, setData] = useState();
    const [inputData, setInputData] = useState('');
    const inputRef = useRef()

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        event.preventDefault()
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${inputData === '' ? 'London' : inputData}&appid=${import.meta.env.VITE_API_ID
                }&units=metric`,
        })
            .then((res) => {
                console.log("res?.data :>> ", res?.data);
                setData(res?.data);
            })
            .catch((err) => {
                console.log("err :>> ", err);
                alert(err?.response?.data?.message)
            }),
            inputRef.current.value = ''
        inputRef.current.focus()
    }
    function handleInput(event) {
        setInputData(event.target.value);
        console.log("inputData :>> ", inputData);
    }
    function onenterCall(event) {
        if (event.key === "Enter") {
            getData()
        }
    }
    
    return (
    <div className="weather">
        <h1 className="heading">🌤️ Weather App</h1>
        {/* Input and Search */}
        <div className="input-button">
            <input
                ref={inputRef}
                onKeyDown={onenterCall}
                onChange={handleInput}
                name="city"
                className="input"
                type="text"
                placeholder="Enter city name..."
            />
            <button
                onClick={() => getData(inputData)}
                className="search-button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="w-6 h-6"
                    fill="currentColor"
                >
                    <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
                </svg>
            </button>
        </div>

        {/* Weather Info */}
        {data?.name && (
            <div className="details">
                <div className="city">{data.name}</div>
                <div className="image-data">
                    <img
                        src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
                        alt="weather icon"
                    />
                    <div className="data">{data?.weather[0]?.main}</div>
                </div>

                {/* Extra Details */}
                <div className="extra-details">
                    <span className="humidity">
                        💧 Humidity: {data?.main?.humidity}%
                    </span>
                    <span className="wind">
                        🌬️ Wind: {data?.wind?.speed} m/s
                    </span>
                    <span>
                        Temperature: {data?.main?.temp}°
                    </span>
                </div>
            </div>
        )}
    </div>

    );
}
