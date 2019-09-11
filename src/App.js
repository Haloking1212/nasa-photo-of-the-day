import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SpaceCard from "./components/SpaceCard.js";



function App() {
  const [data, setData] = useState({});
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
    .then(response => {
      console.log(response.data,"data")
      setData(response.data);
    });
    }, []);
  return (
    <div className="App">
      <SpaceCard 
      
      title={data.title}
      // date={data.date}
      url={data.url}
      explanation={data.explanation} />
    </div>
  );
}

export default App;
