import React, { useState, useEffect } from "react";
import axios from "axios";
import Space from "./Space";



function SpaceCard() {
  const [data, setData] = useState({});
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
    .then(response => {
      console.log(response.data,"data")
      setData(response.data);
    });
    }, []);
  return (
    <div>
    <Space
      title={data.title}
      date={data.date}
      url={data.url}
      explanation={data.explanation} />
    </div>
  );
}

export default SpaceCard;