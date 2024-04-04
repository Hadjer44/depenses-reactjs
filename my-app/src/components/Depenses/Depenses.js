import React, { useState } from "react";
import Carte from "../UI/Carte";
import DepenseFilter from "./DepensesFilter";
import DepenseList from "./DepenseList";
import DepenseChart from "./DepenseChart";
import "./Depenses.css";

const Depenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  //créer un nv tableau filterdDepenses qui contien uniqmnt les élements dont l'année corespond à filteredYear
  const filteredDepenses = props.items.filter((depense) => {
    return depense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Carte className="depenses">
      <DepenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
<DepenseChart depenses={filteredDepenses} />
      <DepenseList items={filteredDepenses} />
    </Carte>
  );
};

export default Depenses;
