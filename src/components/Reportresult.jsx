import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Radar } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { BsFileEarmarkMusic, BsFillFileEarmarkMusicFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

export default function Reportresult(props) {
  const navigate=useNavigate();
  const info = props.reportInfo;
  let D = 0,
    A = 0,
    S = 0,
    depression,
    anxiety,
    stress,
    scaledD,
    scaledA,
    scaledS;
  console.log("hii", info);
  // const [reportInfo, setReportInfo] = useState()

  D=2*(parseInt(info.Q3)+parseInt(info.Q5)+parseInt(info.Q10)+parseInt(info.Q13)+parseInt(info.Q16)+parseInt(info.Q17)+parseInt(info.Q21));
  A=2*(parseInt(info.Q2)+parseInt(info.Q4)+parseInt(info.Q7)+parseInt(info.Q9)+parseInt(info.Q15)+parseInt(info.Q19)+parseInt(info.Q20));
  S=2*(parseInt(info.Q1)+parseInt(info.Q6)+parseInt(info.Q8)+parseInt(info.Q11)+parseInt(info.Q12)+parseInt(info.Q14)+parseInt(info.Q18));

  console.log(D, A, S);

  function getColorForDepression(value) {
    if (value == 2) return "#8aff99";
    else if (value == 4) return "#2ecc71";
    else if (value == 6) return "#FFA500";
    else if (value == 8) return " #ff5733";
    else return " #8b0000";
  }
  function getColorForAnxiety(value) {
    if (value == 2) return " #8aff99";
    else if (value == 4) return "#2ecc71)";
    else if (value == 6) return "#FFA500";
    else if (value == 8) return " #ff5733";
    else return " #8b0000";
  }
  function getColorForStress(value) {
    if (value == 2) return " #8aff99";
    else if (value == 4) return "#2ecc71";
    else if (value == 6) return "#FFA500";
    else if (value == 8) return " #ff5733";
    else return " #8b0000";
  }

  if (D <= 9 && D >= 0) {
    depression = "Normal";
    scaledD = 2;
  } else if (D <= 13 && D >= 10) {
    depression = "Mild";
    scaledD = 4;
  } else if (D >= 14 && D <= 20) {
    depression = "Moderate";
    scaledD = 6;
  } else if (D >= 21 && D <= 27) {
    depression = "Severe";
    scaledD = 8;
  } else {
    depression = "Extremely Severe";
    scaledD = 10;
  }
  // ******************************
  if (A <= 7 && A >= 0) {
    anxiety = "Normal";
    scaledA = 2;
  } else if (A <= 9 && A >= 8) {
    anxiety = "Mild";
    scaledA = 4;
  } else if (A >= 10 && A <= 14) {
    anxiety = "Moderate";
    scaledA = 6;
  } else if (A >= 15 && A <= 19) {
    anxiety = "Severe";
    scaledA = 8;
  } else {
    anxiety = "Extremely Severe";
    scaledA = 10;
  }
  //   **************************
  if (S <= 14 && S >= 0) {
    stress = "Normal";
    scaledS = 2;
  } else if (S <= 18 && S >= 15) {
    stress = "Mild";
    scaledS = 4;
  } else if (S >= 19 && S <= 25) {
    stress = "Moderate";
    scaledS = 6;
  } else if (S >= 26 && S <= 33) {
    stress = "Severe";
    scaledS = 8;
  } else {
    stress = "Extremely Severe";
    scaledS = 10;
  }

  
  const [retriveMusicData, setRetriveMusicData] = useState([]);
  // const [musicApilink, setMusicApilink] = useState('')
  // const x = 7, y = 8;
  const scaledData = [{
    A_D_Scores :[scaledA,scaledD]
    // A_D_Scores: [x, y],
  }];
  console.log(scaledData);
  const musicUrl = localStorage.getItem('api') + '/music';
  console.log(musicUrl);
  console.log(scaledS,scaledA,scaledD);
  useEffect(() => {
    let data;
    const fetchMusicData = async () => {
      try {
        const response = await fetch(`${musicUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scaledData[0]),
        });
        data = await response.json();
        console.log(data);
      } catch (err) {
        console.log("Failed to get data");
      }
      console.log(data.Results)
      if(data.Results.length > 0) {
        const splitMusicData = data.Results.map((item) => {
          const [genre, frequency] = item.split(':');
          
          const formatedGenre = genre.replace("Frequency","").replace(/\(|\)/g,"").trim();
          return {genre: formatedGenre, frequency: frequency.trim()};
        });
        console.log("Music retrived");
        setRetriveMusicData(splitMusicData)
      } 
      console.log(retriveMusicData);

    };
    fetchMusicData();
  }, []);

  return (
    <div className="bg-white flex w-screen h-screen overflow-y-auto">
      <Sidebar/>
      <div className="results w-screen">
        {/* RESULTS 1 */}
        <div className="results1 flex ">
          {/* RESULTS 11 */}
          <div className="results11 flex flex-col">
            <div className="flex flex-col items-center">
              <p className="lato-bold" style={{fontSize:'3rem'}}>Your Health Status</p>
              <ul style={{listStyleType:'disc'}}>
                <li className="lato-bold">Depression is {depression}</li>
                <li className="lato-bold">Anxiety is {anxiety}</li>
                <li className="lato-bold">Stress is {stress}</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <p className="lato-bold">You can chat with our Doctor!!</p>
              <button className="btn lato-bold"  onClick={()=>{navigate("/chat")}}>Chat now</button>
            </div> 
          </div>  
          {/* RESULTS 12 */}
          <div className="results12" style={{ width: "350px"}}>
           <PolarArea
            data={{
              labels: ["Depression", "Anxiety", "Stress"],
              datasets: [
                {
                  label: "Your Report",
                  data: [scaledD, scaledA, scaledS], // Use the actual values of D, A, and S
                  fill: true,
                  backgroundColor: [
                    getColorForDepression(scaledD),
                    getColorForAnxiety(scaledA),
                    getColorForStress(scaledS),
                  ],
                },
              ],
            }}
           />
          </div>
        </div>
        {/* RESULTS 2 */}
        <div className="results2 flex flex-col items-center">
            <h1 className="font-bold">We recommend you to listen these types of musics :) ..</h1>
            <div className="m-4">
              <table>
                <thead>
                <tr className="tableContent">
                  <th className="p-2">Genre</th>
                  <th className="p-2">Frequency</th>
                </tr>
                </thead>
                <tbody>
                {retriveMusicData.map((item, index) => (
                  <tr className="tableContent" key={index}>
                    <td>{item.genre}</td>
                    <td>{item.frequency}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
}