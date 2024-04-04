import React from "react";
import "./ChartBar.css";

const chartBar = (props) => {
let barFillHeight= '0%';  //dynamiser le heigh de css
if(props.maxValue >0){
barFillHeight = Math.round((props.value /props.maxValue)*100) +'%';
}

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"  style={{height:barFillHeight}}></div>
          {/* double accolade pour rendre style dynamique */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default chartBar;
