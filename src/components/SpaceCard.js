import React from "react";

function SpaceCard (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <img src={props.url} alt="nasa picture of the day"/>
            <p>{props.explanation}</p>
        </div>
    );
}
export default SpaceCard;