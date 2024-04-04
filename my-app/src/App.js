import React, { useState } from "react";
import Depenses from "./components/Depenses/Depenses";
import NewDepense from "./components/NewDepense/NewDepense";

const App = () => {
  const DUMMY_DEPENSES = [
    {
      id: "e1",
      title: "Papier Toilette",
      amount: 94.5,
      date: new Date(2024, 3, 5),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2024, 1, 5),
    },
    {
      id: "e3",
      title: "Assurance voiture",
      amount: 165.45,
      date: new Date(2024, 2, 11),
    },
    {
      id: "e4",
      title: "PC",
      amount: 450,
      date: new Date(2024, 1, 25),
    },
    {
      id: "e5",
      title: "vélo",
      amount: 450,
      date: new Date(2020, 1, 25),
    },
  ];


//tester le hook useState
 const [count, setcount] = useState(0);
     const clique = () => {
      setcount(count + 1);
      console.log(setcount);
    };

    const [depenses, setDepenses] = useState(DUMMY_DEPENSES);
    const addDepenseHandler = (depense) => {
      setDepenses((prevDepenses) => {
        return { ...prevDepenses, depense };
      });
    };

    return (
      <div>
        <h2>Gesion de dépenses</h2>
        <NewDepense onAddDepense={addDepenseHandler} />
        <Depenses items={depenses} />

        <div>
          <p>Vous avez cliqué {count} fois</p>
          <button onClick={clique}>Cliquez ici</button>
        </div>
      </div>
    );


};
export default App;
