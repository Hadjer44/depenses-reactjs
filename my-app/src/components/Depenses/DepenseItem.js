import React, { useState } from "react";

import DepenseDate from "./DepenseDate";
import Carte from "../UI/Carte";
import "./DepenseItem.css";

const DepenseItem = (props) => {
  //tester usecase
  // const[title, setTitle] =  useState(props.title) //stocker props.title dans title en uilisant state
  // console.log('DepenseItam évalué par React');
  // const clickHandler = ()=>{  // socker l'evenement dans une variable
  //     setTitle('Updated');
  //     console.log(title);
  // };

  return (
    <li>
      <Carte className="depense-item">
        <DepenseDate date={props.date} />

        <div className="depense-item__description">
          <h2> {props.title} </h2>
          <div className="depense-item__price"> {props.amount} € </div>
        </div>
        <button>change titre</button>
      </Carte>
    </li>
  );
};

export default DepenseItem;
