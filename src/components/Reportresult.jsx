import React from "react";

export default function Reportresult(props) {
  const info = props.reportInfo;
  let D = 0,
    A = 0,
    S = 0,
    depression,
    anxiety,
    stress;
  console.log("hii", info);

  D =
    2 *
    (parseInt(info.Q3) +
      parseInt(info.Q5) +
      parseInt(info.Q10) +
      parseInt(info.Q13) +
      parseInt(info.Q16) +
      parseInt(info.Q17) +
      parseInt(info.Q21));
  A =
    2 *
    (parseInt(info.Q2) +
      parseInt(info.Q4) +
      parseInt(info.Q7) +
      parseInt(info.Q9) +
      parseInt(info.Q15) +
      parseInt(info.Q19) +
      parseInt(info.Q20));
  S =
    2 *
    (parseInt(info.Q1) +
      parseInt(info.Q6) +
      parseInt(info.Q8) +
      parseInt(info.Q11) +
      parseInt(info.Q12) +
      parseInt(info.Q14) +
      parseInt(info.Q18));

  console.log(D, A, S);

  if (D <= 9 && D >= 0) depression = "Normal";
  else if (D <= 13 && D >= 10) depression = "Mild";
  else if (D >= 14 && D <= 20) depression = "Moderate";
  else if (D >= 21 && D <= 27) depression = "Severe";
  else depression = "Extremely Severe";

  // **************

  if (A <= 7 && A >= 0) anxiety = "Normal";
  else if (A <= 9 && A >= 8) anxiety = "Mild";
  else if (A >= 10 && A <= 14) anxiety = "Moderate";
  else if (A >= 15 && A <= 19) anxiety = "Severe";
  else anxiety = "Extremely Severe";

  //   *********************

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
    </div>
  );
}
