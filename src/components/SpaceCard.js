import React from "react";

function SpaceCard (props) {
    console.log(props);
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt="saturn behind the moon"/>
            <p>{props.explanation}</p>
        </div>
    );
}
export default SpaceCard;