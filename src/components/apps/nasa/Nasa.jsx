import React, { useState } from "react"
import NasaResults from "./NasaResults"

const baseURL = "https://api.nasa.gov/planetary/apod"
const key = "tXKSCGzypx93vDdVKRz1b53AHJJFEiuX0F2yKZSN"

navigator.geolocation.getCurrentPosition((showPosition) => {
    console.log(showPosition)
    return showPosition
    });

const NasaMap = () => {
    const [results, setResults] = useState([]);

    
    const fetchResults = () => {
        let url = `${baseURL}?api_key=${key}`

        fetch(url)
            .then(res => res.json())
            .then(function (data){
                console.log(data)
                setResults(data)
            })  
            .catch(err => console.log(err));
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        fetchResults();
    }

    return (
        <div className="main">
            <div className="mainDiv"></div>
                <button onClick={(e) => handleSubmit(e)} on className="nasaImgBtn">Oooh pretty</button>
                <div>
                    {results.length === 0 ? null : <NasaResults results={results}/>}
                </div>
        </div>
    )
};
export default NasaMap;