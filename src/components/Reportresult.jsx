import React from "react";
import {Chart as ChartJS} from "chart.js/auto"
import {Radar} from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";

export default function Reportresult(props) {

  const info = props.reportInfo;
  let D=0,A=0,S=0,depression,anxiety,stress,scaledD,scaledA,scaledS;
  console.log("hii", info);

  
  D=2*(parseInt(info.Q3)+parseInt(info.Q5)+parseInt(info.Q10)+parseInt(info.Q13)+parseInt(info.Q16)+parseInt(info.Q17)+parseInt(info.Q21));
  A=2*(parseInt(info.Q2)+parseInt(info.Q4)+parseInt(info.Q7)+parseInt(info.Q9)+parseInt(info.Q15)+parseInt(info.Q19)+parseInt(info.Q20));
  S=2*(parseInt(info.Q1)+parseInt(info.Q6)+parseInt(info.Q8)+parseInt(info.Q11)+parseInt(info.Q12)+parseInt(info.Q14)+parseInt(info.Q18));

  console.log(D, A, S);


  function getColorForDepression(value) {
    if (value ==2) return '#8aff99'; 
    else if (value ==4) return '#2ecc71'; 
    else if (value==6) return '#FFA500'; 
    else if (value ==8) return ' #ff5733'; 
    else return ' #8b0000'; 
  }
  function getColorForAnxiety(value) {
    if (value ==2) return ' #8aff99'; 
    else if (value ==4) return '#2ecc71)'; 
    else if (value ==6) return '#FFA500'; 
    else if (value ==8) return ' #ff5733'; 
    else return ' #8b0000'; 
  }
  function getColorForStress(value) {
    if (value ==2) return ' #8aff99'; 
    else if (value ==4) return '#2ecc71'; 
    else if (value ==6) return '#FFA500'; 
    else if (value==8) return ' #ff5733'; 
    else return ' #8b0000'; 
  }




  if (D <= 9 && D >= 0) {depression = "Normal";scaledD=2}
  else if (D <= 13 && D >= 10) {depression = "Mild";scaledD=4}
  else if (D >= 14 && D <= 20) {depression = "Moderate";scaledD=6}
  else if (D >= 21 && D <= 27) {depression = "Severe";scaledD=8}
  else {depression = "Extremely Severe";scaledD=10}
  // ******************************
  if (A <= 7 && A >= 0) {anxiety = "Normal";scaledA=2}
  else if (A <= 9 && A >= 8) {anxiety = "Mild";scaledA=4}
  else if (A >= 10 && A <= 14) {anxiety = "Moderate";scaledA=6}
  else if (A >= 15 && A <= 19) {anxiety = "Severe";scaledA=8}
  else {anxiety = "Extremely Severe";scaledA=10}
  //   **************************
  if (S <= 14 && S >= 0) {stress = "Normal";scaledS=2}
  else if (S <= 18 && S >= 15) {stress = "Mild";scaledS=4}
  else if (S >= 19 && S <= 25) {stress = "Moderate";scaledS=6}
  else if (S >= 26 && S <= 33) {stress = "Severe";scaledS=8}
  else {stress = "Extremely Severe";scaledS=10}

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
          data: [scaledD, scaledA, scaledS], // Use the actual values of D, A, and S
          fill: true,
          backgroundColor: [
            getColorForDepression(scaledD),
            getColorForAnxiety(scaledA),
            getColorForStress(scaledS)
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
