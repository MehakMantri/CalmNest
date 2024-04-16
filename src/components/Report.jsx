import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
export default function Report(props) {
  
  const navigate=useNavigate();
  const[info,setInfo]=useState({Q1:0,Q2:0,Q3:0,Q4:0,Q5:0,Q6:0,Q7:0,Q8:0,Q9:0,Q10:0,Q11:0,Q12:0,Q13:0,Q14:0,Q15:0,Q16:0,Q17:0,Q18:0,Q19:0,Q20:0,Q21:0});

  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  // FUNCTION WHEN FORM IS SUBMITTED
  function submitHandler(event){
    event.preventDefault();
    console.log("Form Submitted")
    console.log(info);
    props.infoCollection(info)
    navigate("/report/result")
  }

  function changeHandler(event){
    setInfo((prevState)=>{return{...prevState,[event.target.name]:event.target.value}})
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
        <div className=' flex bg-white w-full h-full'>
          <Sidebar/>
          <div className="report">
           <div className={`Que${currentQuestion === 0 ? '' : ' hidden'} flex flex-col gap-8`}>
            <div className='flex flex-col gap-5'>
              <p className='lato-bold' style={{fontSize:'2rem'}}>Things to Remember Before You Start the Quiz</p>
              <ul style={{listStyleType:'disc'}}>
                 <li>Please consider your thoughts, feelings and actions in the last 2 weeks.</li>
                 <li>Choose the response that you relate with the most</li>
                 <li>There are no right or wrong answers to the questions.</li>
                 <li>There will be 21 questions.</li>
                 <li>Please answer all questions to get your results.</li>
              </ul>
            </div>
            <div className='flex justify-center'><button className='btn' onClick={()=>{setCurrentQuestion(1)}}>START ASSESSMENT</button></div>  
           </div>
           <form onSubmit={submitHandler} className={currentQuestion === 0 ? 'hidden' : 'surveyForm'}>
        
            <div className={`Que${currentQuestion === 1 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I found it hard to wind down</p>
              <div className='options1'>
                <input type="radio" id='Q1-0' name='Q1' value='0' onChange={changeHandler}/>
                <label htmlFor="Q1-0">Never</label>
                <input type="radio" id='Q1-1' name='Q1' value='1' onChange={changeHandler} />
                <label htmlFor="Q1-1">Some of the time</label>
                <input type="radio" id='Q1-2' name='Q1' value='2' onChange={changeHandler} />
                <label htmlFor="Q1-2">Good part of the time</label>
                <input type="radio" id='Q1-3' name='Q1' value='3' onChange={changeHandler} />
                <label htmlFor="Q1-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 2 ? '' : ' hidden'} que `}>
             <p className='lato-bold'>I was aware of dryness of my mouth</p>
             <div className='options1'>
               <input type="radio" id='Q2-0' name='Q2' value='0' onChange={changeHandler}/>
               <label htmlFor="Q2-0">Never</label>
               <input type="radio" id='Q2-1' name='Q2' value='1' onChange={changeHandler} />
               <label htmlFor="Q2-1">Some of the time</label>
               <input type="radio" id='Q2-2' name='Q2' value='2' onChange={changeHandler} />
               <label htmlFor="Q2-2">Good part of the time</label>
               <input type="radio" id='Q2-3' name='Q2' value='3' onChange={changeHandler} />
               <label htmlFor="Q2-3">Most of the time</label>
             </div>
            </div>
            <div className={`Que${currentQuestion === 3 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I couldn’t seem to experience any positive feeling at all</p>
              <div className='options1'>
               <input type="radio" id='Q3-0' name='Q3' value='0' onChange={changeHandler} />
               <label htmlFor="Q3-0">Never</label>
               <input type="radio" id='Q3-1' name='Q3' value='1' onChange={changeHandler} />
               <label htmlFor="Q3-1">Some of the time</label>
               <input type="radio" id='Q3-2' name='Q3' value='2' onChange={changeHandler} />
               <label htmlFor="Q3-2">Good part of the time</label>
               <input type="radio" id='Q3-3' name='Q3' value='3' onChange={changeHandler} />
               <label htmlFor="Q3-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 4 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I experienced breathing difficulty (e.g. excessively rapid breathing,breathlessness in the absence of physical exertion)</p>
              <div className='options1'>
               <input type="radio" id='Q4-0' name='Q4' value='0' onChange={changeHandler} />
               <label htmlFor="Q4-0">Never</label>
               <input type="radio" id='Q4-1' name='Q4' value='1' onChange={changeHandler} />
               <label htmlFor="Q4-1">Some of the time</label>
               <input type="radio" id='Q4-2' name='Q4' value='2' onChange={changeHandler} />
               <label htmlFor="Q4-2">Good part of the time</label>
               <input type="radio" id='Q4-3' name='Q4' value='3' onChange={changeHandler} />
               <label htmlFor="Q4-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 5 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I found it difficult to work up the initiative to do things</p>
              <div className='options1'>
               <input type="radio" id='Q5-0' name='Q5' value='0' onChange={changeHandler}/>
               <label htmlFor="Q5-0">Never</label>
               <input type="radio" id='Q5-1' name='Q5' value='1' onChange={changeHandler} />
               <label htmlFor="Q5-1">Some of the time</label>
               <input type="radio" id='Q5-2' name='Q5' value='2' onChange={changeHandler} />
               <label htmlFor="Q5-2">Good part of the time</label>
               <input type="radio" id='Q5-3' name='Q5' value='3' onChange={changeHandler} />
               <label htmlFor="Q5-3">Most of the time</label>
              </div>  
            </div>

            {/* *************************** */}
            <div className={`Que${currentQuestion === 6 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I tended to over-react to situations</p>
              <div className='options1'>
               <input type="radio" id='Q6-0' name='Q6' value='0' onChange={changeHandler} />
               <label htmlFor="Q6-0">Never</label>
               <input type="radio" id='Q6-1' name='Q6' value='1' onChange={changeHandler} />
               <label htmlFor="Q6-1">Some of the time</label>
               <input type="radio" id='Q6-2' name='Q6' value='2' onChange={changeHandler} />
               <label htmlFor="Q6-2">Good part of the time</label>
               <input type="radio" id='Q6-3' name='Q6' value='3' onChange={changeHandler} />
               <label htmlFor="Q6-3">Most of the time</label>
              </div>             
            </div>
            <div className={`Que${currentQuestion === 7 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I experienced trembling (e.g. in the hands)</p>
              <div className='options1'>
               <input type="radio" id='Q7-0' name='Q7' value='0' onChange={changeHandler} />
               <label htmlFor="Q7-0">Never</label>
               <input type="radio" id='Q7-1' name='Q7' value='1' onChange={changeHandler} />
               <label htmlFor="Q7-1">Some of the time</label>
               <input type="radio" id='Q7-2' name='Q7' value='2' onChange={changeHandler} />
               <label htmlFor="Q7-2">Good part of the time</label>
               <input type="radio" id='Q7-3' name='Q7' value='3' onChange={changeHandler} />
               <label htmlFor="Q7-3">Most of the time</label>
              </div>              
            </div>
            <div className={`Que${currentQuestion === 8 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt that I was using a lot of nervous energy</p>
              <div className='options1'>
               <input type="radio" id='Q8-0' name='Q8' value='0' onChange={changeHandler}/>
               <label htmlFor="Q8-0">Never</label>
               <input type="radio" id='Q8-1' name='Q8' value='1' onChange={changeHandler} />
               <label htmlFor="Q8-1">Some of the time</label>
               <input type="radio" id='Q8-2' name='Q8' value='2' onChange={changeHandler} />
               <label htmlFor="Q8-2">Good part of the time</label>
               <input type="radio" id='Q8-3' name='Q8' value='3' onChange={changeHandler} />
               <label htmlFor="Q8-3">Most of the time</label>
              </div>  
            </div>
            <div className={`Que${currentQuestion === 9 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I was worried about situations in which I might panic and make a fool of myself</p>
              <div className='options1'>
               <input type="radio" id='Q9-0' name='Q9' value='0' onChange={changeHandler}  />
               <label htmlFor="Q9-0">Never</label>
               <input type="radio" id='Q9-1' name='Q9' value='1' onChange={changeHandler} />
               <label htmlFor="Q9-1">Some of the time</label>
               <input type="radio" id='Q9-2' name='Q9' value='2' onChange={changeHandler} />
               <label htmlFor="Q9-2">Good part of the time</label>
               <input type="radio" id='Q9-3' name='Q9' value='3' onChange={changeHandler} />
               <label htmlFor="Q9-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 10 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt that I had nothing to look forward to</p>
              <div className='options1'>
               <input type="radio" id='Q10-0' name='Q10' value='0' onChange={changeHandler} />
               <label htmlFor="Q10-0">Never</label>
               <input type="radio" id='Q10-1' name='Q10' value='1' onChange={changeHandler} />
               <label htmlFor="Q10-1">Some of the time</label>
               <input type="radio" id='Q10-2' name='Q10' value='2' onChange={changeHandler} />
               <label htmlFor="Q10-2">Good part of the time</label>
               <input type="radio" id='Q10-3' name='Q10' value='3' onChange={changeHandler} />
               <label htmlFor="Q10-3">Most of the time</label>
              </div>              
            </div>

            {/* ************************ */}
            <div className={`Que${currentQuestion === 11 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I found myself getting agitated</p>
              <div className='options1'>
               <input type="radio" id='Q11-0' name='Q11' value='0' onChange={changeHandler}/>
               <label htmlFor="Q11-0">Never</label>
               <input type="radio" id='Q11-1' name='Q11' value='1' onChange={changeHandler} />
               <label htmlFor="Q11-1">Some of the time</label>
               <input type="radio" id='Q11-2' name='Q11' value='2' onChange={changeHandler} />
               <label htmlFor="Q11-2">Good part of the time</label>
               <input type="radio" id='Q11-3' name='Q11' value='3' onChange={changeHandler} />
               <label htmlFor="Q11-3">Most of the time</label>
              </div> 
            </div>
            <div className={`Que${currentQuestion === 12 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I found it difficult to relax</p>
              <div className='options1'>
               <input type="radio" id='Q12-0' name='Q12' value='0' onChange={changeHandler}/>
               <label htmlFor="Q12-0">Never</label>
               <input type="radio" id='Q12-1' name='Q12' value='1' onChange={changeHandler} />
               <label htmlFor="Q12-1">Some of the time</label>
               <input type="radio" id='Q12-2' name='Q12' value='2' onChange={changeHandler} />
               <label htmlFor="Q12-2">Good part of the time</label>
               <input type="radio" id='Q12-3' name='Q12' value='3' onChange={changeHandler} />
               <label htmlFor="Q12-3">Most of the time</label>
              </div> 
            </div>
            <div className={`Que${currentQuestion === 13 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt down-hearted and blue</p>
              <div className='options1'>
               <input type="radio" id='Q13-0' name='Q13' value='0' onChange={changeHandler} />
               <label htmlFor="Q13-0">Never</label>
               <input type="radio" id='Q13-1' name='Q13' value='1' onChange={changeHandler} />
               <label htmlFor="Q13-1">Some of the time</label>
               <input type="radio" id='Q13-2' name='Q13' value='2' onChange={changeHandler} />
               <label htmlFor="Q13-2">Good part of the time</label>
               <input type="radio" id='Q13-3' name='Q13' value='3' onChange={changeHandler} />
               <label htmlFor="Q13-3">Most of the time</label>
              </div>              
            </div>
            <div className={`Que${currentQuestion === 14 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I was intolerant of anything that kept me from getting on with what I was doing</p>
              <div className='options1'>
               <input type="radio" id='Q14-0' name='Q14' value='0' onChange={changeHandler} />
               <label htmlFor="Q14-0">Never</label>
               <input type="radio" id='Q14-1' name='Q14' value='1' onChange={changeHandler} />
               <label htmlFor="Q14-1">Some of the time</label>
               <input type="radio" id='Q14-2' name='Q14' value='2' onChange={changeHandler} />
               <label htmlFor="Q14-2">Good part of the time</label>
               <input type="radio" id='Q14-3' name='Q14' value='3' onChange={changeHandler} />
               <label htmlFor="Q14-3">Most of the time</label>
              </div>             
            </div>
            <div className={`Que${currentQuestion === 15 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt I was close to panic</p>
              <div className='options1'>
               <input type="radio" id='Q15-0' name='Q15' value='0' onChange={changeHandler}  />
               <label htmlFor="Q15-0">Never</label>
               <input type="radio" id='Q15-1' name='Q15' value='1' onChange={changeHandler} />
               <label htmlFor="Q15-1">Some of the time</label>
               <input type="radio" id='Q15-2' name='Q15' value='2' onChange={changeHandler} />
               <label htmlFor="Q15-2">Good part of the time</label>
               <input type="radio" id='Q15-3' name='Q15' value='3' onChange={changeHandler} />
               <label htmlFor="Q15-3">Most of the time</label>
              </div>
            </div>

            {/* *********************************** */}
            <div className={`Que${currentQuestion === 16 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I was unable to become enthusiastic about anything</p>
              <div className='options1'>
               <input type="radio" id='Q16-0' name='Q16' value='0' onChange={changeHandler}  />
               <label htmlFor="Q16-0">Never</label>
               <input type="radio" id='Q16-1' name='Q16' value='1' onChange={changeHandler} />
               <label htmlFor="Q16-1">Some of the time</label>
               <input type="radio" id='Q16-2' name='Q16' value='2' onChange={changeHandler} />
               <label htmlFor="Q16-2">Good part of the time</label>
               <input type="radio" id='Q16-3' name='Q16' value='3' onChange={changeHandler} />
               <label htmlFor="Q16-3">Most of the time</label>
              </div>               
            </div>
            <div className={`Que${currentQuestion === 17 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt I wasn’t worth much as a person</p>
              <div className='options1'>
               <input type="radio" id='Q17-0' name='Q17' value='0' onChange={changeHandler}  />
               <label htmlFor="Q17-0">Never</label>
               <input type="radio" id='Q17-1' name='Q17' value='1' onChange={changeHandler} />
               <label htmlFor="Q17-1">Some of the time</label>
               <input type="radio" id='Q17-2' name='Q17' value='2' onChange={changeHandler} />
               <label htmlFor="Q17-2">Good part of the time</label>
               <input type="radio" id='Q17-3' name='Q17' value='3' onChange={changeHandler} />
               <label htmlFor="Q17-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 18 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt that I was rather touchy</p>
              <div className='options1'>
               <input type="radio" id='Q18-0' name='Q18' value='0' onChange={changeHandler} />
               <label htmlFor="Q18-0">Never</label>
               <input type="radio" id='Q18-1' name='Q18' value='1' onChange={changeHandler} />
               <label htmlFor="Q18-1">Some of the time</label>
               <input type="radio" id='Q18-2' name='Q18' value='2' onChange={changeHandler} />
               <label htmlFor="Q18-2">Good part of the time</label>
               <input type="radio" id='Q18-3' name='Q18' value='3' onChange={changeHandler} />
               <label htmlFor="Q18-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 19 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)</p>
              <div className='options1'>
               <input type="radio" id='Q19-0' name='Q19' value='0' onChange={changeHandler}  />
               <label htmlFor="Q19-0">Never</label>
               <input type="radio" id='Q19-1' name='Q19' value='1' onChange={changeHandler} />
               <label htmlFor="Q19-1">Some of the time</label>
               <input type="radio" id='Q19-2' name='Q19' value='2' onChange={changeHandler} />
               <label htmlFor="Q19-2">Good part of the time</label>
               <input type="radio" id='Q19-3' name='Q19' value='3' onChange={changeHandler} />
               <label htmlFor="Q19-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 20 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt scared without any good reason</p>
              <div className='options1'>
               <input type="radio" id='Q20-0' name='Q20' value='0' onChange={changeHandler} />
               <label htmlFor="Q20-0">Never</label>
               <input type="radio" id='Q20-1' name='Q20' value='1' onChange={changeHandler} />
               <label htmlFor="Q20-1">Some of the time</label>
               <input type="radio" id='Q20-2' name='Q20' value='2' onChange={changeHandler} />
               <label htmlFor="Q20-2">Good part of the time</label>
               <input type="radio" id='Q20-3' name='Q20' value='3' onChange={changeHandler} />
               <label htmlFor="Q20-3">Most of the time</label>
              </div>
            </div>
            <div className={`Que${currentQuestion === 21 ? '' : ' hidden'} que `}>
              <p className='lato-bold'>I felt that life was meaningless</p>
              <div className='options1'>
               <input type="radio" id='Q21-0' name='Q21' value='0' onChange={changeHandler} />
               <label htmlFor="Q21-0">Never</label>
               <input type="radio" id='Q21-1' name='Q21' value='1' onChange={changeHandler} />
               <label htmlFor="Q21-1">Some of the time</label>
               <input type="radio" id='Q21-2' name='Q21' value='2' onChange={changeHandler} />
               <label htmlFor="Q21-2">Good part of the time</label>
               <input type="radio" id='Q21-3' name='Q21' value='3' onChange={changeHandler} />
               <label htmlFor="Q21-3">Most of the time</label>
              </div>  
            </div>
            
            {/* ************** */}
            <div>
              <button className={`Que${currentQuestion === 22 ? '' : ' hidden'} que  btn`} onClick={submitHandler}>Submit</button>
            </div>
           </form>
          </div>
        </div>
    )
}
