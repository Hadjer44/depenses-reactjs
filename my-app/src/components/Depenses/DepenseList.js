import React from "react";
import DepenseItem from "./DepenseItem";
import './DepenseList.css';

const DepenseList =(props) =>{

let depensesContent;

if (props.items.length > 0) {
  depensesContent = props.items.map((depense) => (
    <DepenseItem
      key={depense.id}
      title={depense.title}
      amount={depense.amount}
      date={depense.date}
    />
  ));
} else if (props.items.length === 0){
    depensesContent= <p>Pas de dépenses !!!!!</p>;
} else  {
  depensesContent = props.items.map((depense) => (
    <DepenseItem
      key={depense.id}
      title={depense.title}
      amount={depense.amount}
      date={depense.date}
    />
  ));
}  

return <ul className="depense-list">
{depensesContent}
</ul>
};

export default DepenseList;