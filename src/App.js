import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SpaceCard from "./components/SpaceCard.js";



function App() {
  const [data, setData] = useState({});
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
    .then(response => {
      setData(response.data);
    });
    }, []);
  return (
    <div className="App">
      <input type="date" className="dateInput"/>
      <SpaceCard title={data.title}
      url={data.url}
      explanation={data.explanation} />
    </div>
  );
}

export default App;
