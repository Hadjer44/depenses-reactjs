import React from "react";
import ChatBar from "./ChartBar";
import "./Chart.css";

const chart = (props) => {
const dataPointValues = props.DataPoints.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.DataPoints.map((dataPoint) => (
        <ChatBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      //creer tableau de point graphiques
    </div>
  );
};

export default chart;
