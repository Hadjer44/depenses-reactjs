import React from "react";

import "./DepensesFilter.css";

const DepenseFilter = (props) => {
  return (
    <div className="depense-filter">
      <div className="depense-filter__control">
        <label> filter</label>
        <select value={props.selected}
        onChange={ (event) => props.onChangeFilter(event.target.value)  }
        >
          
          <option value="selectionner">Sélectionner une date</option>
         <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default DepenseFilter;
