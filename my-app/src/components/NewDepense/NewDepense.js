import React from "react";
import "./NewDepense.css";
import DepenseForm from "./DepenseForm";

const NewDepense = (props) => {
  const onSaveDepenseDataHandler = (enteredDepenseData) => {
    //creer  nvl objet (depenseData) indépendant en copiant tt les proporiétés
    //de enteredDepenseData  en utilisant " ...spead operator "
    const depenseData = {
      ...enteredDepenseData,
      id: Math.random().toString()
    };
    props.onAddDepense(depenseData);
  };

  return (
    <div className="new-depense">
      <DepenseForm onSaveDepenseData={onSaveDepenseDataHandler} />
    </div>
  );
}; 

export default NewDepense;
