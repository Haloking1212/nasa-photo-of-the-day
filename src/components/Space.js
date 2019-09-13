import React from "react";
import styled, { ThemeProvider } from 'styled-components'

const Box = styled.h2`
  color: ${props => props.theme.color};
`

function Space (props) {
    return (
        <div>
            <ThemeProvider 
            theme={{color:'purple'}}>
                <Box><h2>{props.title}</h2></Box>
            </ThemeProvider>
            <h4>{props.date}</h4>
            <img src={props.url} alt="nasa picture of the day"/>
            <p>{props.explanation}</p>
        </div>
    );
}
export default Space;