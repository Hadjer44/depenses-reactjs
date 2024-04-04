import React from 'react';
import './DepenseDate.css'

const DepenseDate =(props) => {
    
    const mois = props.date.toLocaleString('en-us',{mois:'long'});
    const jour = props.date.toLocaleString('en-us',{day:'2-digit'});
    const annee =props.date.getFullYear();

    return(

        <div className="expense-date">
             <div className="expense-date__month">{mois}</div>
        <div className="expense-date__year">{annee}</div>
        <div className="expense-date__day">{jour}</div>
        </div>
    )
}

export default DepenseDate;