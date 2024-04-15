import React from "react";
import {Chart as ChartJS} from "chart.js/auto"
import {Radar} from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";

export default function Reportresult(props) {

  function getColorForDepression(value) {
    if (value <= 9 && value >= 0) return '#8aff99'; 
    else if (value <= 13 && value >= 10) return '#2ecc71'; 
    else if (value >= 14 && value <= 20) return '#FFA500'; 
    else if (value >= 21 && value <= 27) return ' #ff5733'; 
    else return ' #8b0000'; 
  }
  function getColorForAnxiety(value) {
    if (value <= 7 && value >= 0) return ' #8aff99'; 
    else if (value <= 9 && value >= 8) return '#2ecc71)'; 
    else if (value >= 10 && value <= 14) return '#FFA500'; 
    else if (value >= 15 && value <= 19) return ' #ff5733'; 
    else return ' #8b0000'; 
  }
  function getColorForStress(value) {
    if (value <= 14 && value >= 0) return ' #8aff99'; 
    else if (value <= 18 && value >= 15) return '#2ecc71'; 
    else if (value >= 19 && value <= 25) return '#FFA500'; 
    else if (value >= 26 && value <= 33) return ' #ff5733'; 
    else return ' #8b0000'; 
  }

  const info = props.reportInfo;
  let D=0,A=0,S=0,depression,anxiety,stress;
  console.log("hii", info);

  D=2*(parseInt(info.Q3)+parseInt(info.Q5)+parseInt(info.Q10)+parseInt(info.Q13)+parseInt(info.Q16)+parseInt(info.Q17)+parseInt(info.Q21));
  A=2*(parseInt(info.Q2)+parseInt(info.Q4)+parseInt(info.Q7)+parseInt(info.Q9)+parseInt(info.Q15)+parseInt(info.Q19)+parseInt(info.Q20));
  S=2*(parseInt(info.Q1)+parseInt(info.Q6)+parseInt(info.Q8)+parseInt(info.Q11)+parseInt(info.Q12)+parseInt(info.Q14)+parseInt(info.Q18));

  console.log(D, A, S);

  if (D <= 9 && D >= 0) depression = "Normal";
  else if (D <= 13 && D >= 10) depression = "Mild";
  else if (D >= 14 && D <= 20) depression = "Moderate";
  else if (D >= 21 && D <= 27) depression = "Severe";
  else depression = "Extremely Severe";
  // ******************************
  if (A <= 7 && A >= 0) anxiety = "Normal";
  else if (A <= 9 && A >= 8) anxiety = "Mild";
  else if (A >= 10 && A <= 14) anxiety = "Moderate";
  else if (A >= 15 && A <= 19) anxiety = "Severe";
  else anxiety = "Extremely Severe";
  //   **************************
  if (S <= 14 && S >= 0) stress = "Normal";
  else if (S <= 18 && S >= 15) stress = "Mild";
  else if (S >= 19 && S <= 25) stress = "Moderate";
  else if (S >= 26 && S <= 33) stress = "Severe";
  else stress = "Extremely Severe";

  return (
    <div className="report-result bg-white">
      <p>Depression is {depression}</p>
      <p>Anxiety is {anxiety}</p>
      <p>Stress is {stress}</p>
      <div>
      <div style={{ width: '500px', height: '500px' }}>
  <PolarArea  
    data={{
      labels:["Depression", "Anxiety", "Stress"],
      datasets: [
        {
          label: "Your Report",
          data: [D, A, S], // Use the actual values of D, A, and S
          fill: true,
          backgroundColor: [
            getColorForDepression(D),
            getColorForAnxiety(A),
            getColorForStress(S)
          ]
        }
      ]
    }}
  />
</div>

      </div>
    </div>
  );
}
