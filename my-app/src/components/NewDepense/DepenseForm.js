import React, { useState } from "react";
import "./DepenseForm.css";
// import DepensesServices from "../services/depensesServices";

const DepenseForm = (props) => {

const currentDate= new Date().toISOString().split('T')[0];

//option 1 : declarer usestate par élément!  
const [enteredTitle, setenteredTitle] = useState(""); 
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState(currentDate);

  //option 2 : déclarer un seul useState pour ts les éléments
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    //creer l'evenement
    setenteredTitle(event.target.value);

    // setuserInput({
    //   enteredTitle : event.target.value,
    //   ...userInput,  //pour ne pas perdre les valeurs/données d'autres inputs
    // })

    // setuserInput((prevState) => {
    //   //prevstate : parametre d'une fonction de rappel de state precédent!!
    //   return {
    //     ...prevState,
    //     setenteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value); //appeler le montant  avec set et ajouter valeur cible

    //  setuserInput({
    //   enteredAmount : event.target.value,
    //   ...userInput,
    // })

    // setuserInput((prevState) => {
    //   //prevstate : parametre d'une fonction de rappel de state precédent!!
    //   return { ...prevState, setenteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);

    //  setuserInput({
    //   enteredDate : event.target.value,
    //   ...userInput,  //pour ne pas perdre les valeurs/données d'autres inputs
    // })

    // setuserInput((prevState) => {
    //   //prevstate : parametre d'une fonction de rappel de state precédent!!
    //   return { ...prevState, setenteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //preventDefault: empeche le comportement par defaut du form

    // let newDepense ={title, amount, date};

    // (newDepense).then(resp =>{
    //   alert(JSON.stringify(resp.data));
    // });

    const DepenseData = {
      //creer un objet DepenseData
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveDepenseData(DepenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };



  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-depense__controls">
        <div className="new-depense__control">
          <label>Titre</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-depense__control">
          <label>Montant</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* onchange: definit le declanchement d'un script qd l'utilisaeur modifie les données */}
        </div>

        <div className="new-depense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-depense__actions">
        <button type="submit">Add Depense</button>
      </div>
    </form>
  );
};

export default DepenseForm;
