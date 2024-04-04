import React from 'react';
import './Carte.css';

function Carte(props){
const classes = 'carte ' + props.className;
    return(
        <div className= {classes}> {props.children}  </div>
    );
}

export default Carte;