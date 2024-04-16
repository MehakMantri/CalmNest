import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Report(props) {
  
  const navigate=useNavigate();
 
  
  const[info,setInfo]=useState({Q1:0,Q2:0,Q3:0,Q4:0,Q5:0,Q6:0,Q7:0,Q8:0,Q9:0,Q10:0,Q11:0,Q12:0,Q13:0,Q14:0,Q15:0,Q16:0,Q17:0,Q18:0,Q19:0,Q20:0,Q21:0});

  function submitHandler(event){
    event.preventDefault();
    console.log("Form Submitted")
    console.log(info);
    props.infoCollection(info)
    navigate("/report/result")
    
    
    // for(let i=1;i<=21;i++){
    //   ans = ans + parseInt(info[`Q${i}`]);
    // }
   
  }

  function changeHandler(event){
    setInfo((prevState)=>{return{...prevState,[event.target.name]:event.target.value}})
  }
  return (
      
        <div className='report bg-white'>
          <div className='flex flex-col '>
              <p className=' mt-2 font-bold' style={{width:'80vw'}}>
              Please read each statement and select an option 0, 1, 2 or 3 which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement.
            </p>
            <div>
            <p text-left>
              The rating scale is as follows:
            </p>
            </div>
           
            <div>
              <p>0 Did not apply to me at all</p>
              <p>1 Applied to me to some degree, or some of the time</p>
              <p>2 Applied to me to a considerable degree or a good part of time</p>
              <p>3 Applied to me very much or most of the time</p>
              <p>Options progress from left to right, with 1 at the beginning and 3 at the end.</p>
            </div>
          </div>
         
          <form onSubmit={submitHandler}>
            <div style={{width:'80vw'}}>
            <div className='Que1 que'>
              <p>I found it hard to wind down</p>
              
              <div className='options1' style={{flexDirection:'column'}}>
                <div className='options1' style={{width:'100%', marginBottom:'0.5rem'}}>
                     <label htmlFor="">0</label>
                     <label htmlFor="">1</label>
                     <label htmlFor="">2</label>
                     <label htmlFor="">3</label>
                </div>
                <div className='options1' style={{width:'100%'}}>
                <input type="radio" id='Q1-0' name='Q1' value='0' onChange={changeHandler} required/>
                <input type="radio" id='Q1-1' name='Q1' value='1' onChange={changeHandler} />
               <input type="radio" id='Q1-2' name='Q1' value='2' onChange={changeHandler} />
               <input type="radio" id='Q1-3' name='Q1' value='3' onChange={changeHandler} />
                </div>
               
              </div>
              
            </div>
            <div className='Que2 que'>
             <p>I was aware of dryness of my mouth</p>
             <div className='options1'>
               <input type="radio" id='Q2-0' name='Q2' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q2-1' name='Q2' value='1' onChange={changeHandler} />
               <input type="radio" id='Q2-2' name='Q2' value='2' onChange={changeHandler} />
               <input type="radio" id='Q2-3' name='Q2' value='3' onChange={changeHandler} />
             </div>
            </div>
            <div className='Que3 que'>
              <p>I couldn’t seem to experience any positive feeling at all</p>
              <div className='options1'>
               <input type="radio" id='Q3-0' name='Q3' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q3-1' name='Q3' value='1' onChange={changeHandler} />
               <input type="radio" id='Q3-2' name='Q3' value='2' onChange={changeHandler} />
               <input type="radio" id='Q3-3' name='Q3' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que4 que'>
              <p>I experienced breathing difficulty (e.g. excessively rapid breathing,breathlessness in the absence of physical exertion)</p>
              <div className='options1'>
               <input type="radio" id='Q4-0' name='Q4' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q4-1' name='Q4' value='1' onChange={changeHandler} />
               <input type="radio" id='Q4-2' name='Q4' value='2' onChange={changeHandler} />
               <input type="radio" id='Q4-3' name='Q4' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que5 que'>
              <p>I found it difficult to work up the initiative to do things</p>
              <div className='options1'>
               <input type="radio" id='Q5-0' name='Q5' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q5-1' name='Q5' value='1' onChange={changeHandler} />
               <input type="radio" id='Q5-2' name='Q5' value='2' onChange={changeHandler} />
               <input type="radio" id='Q5-3' name='Q5' value='3' onChange={changeHandler} />
              </div>  
            </div>

            {/* *************************** */}
            <div className='Que6 que'>
              <p>I tended to over-react to situations</p>
              <div className='options1'>
               <input type="radio" id='Q6-0' name='Q6' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q6-1' name='Q6' value='1' onChange={changeHandler} />
               <input type="radio" id='Q6-2' name='Q6' value='2' onChange={changeHandler} />
               <input type="radio" id='Q5-3' name='Q6' value='3' onChange={changeHandler} />
              </div>             
            </div>
            <div className='Que7 que'>
              <p>I experienced trembling (e.g. in the hands)</p>
              <div className='options1'>
               <input type="radio" id='Q7-0' name='Q7' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q7-1' name='Q7' value='1' onChange={changeHandler} />
               <input type="radio" id='Q7-2' name='Q7' value='2' onChange={changeHandler} />
               <input type="radio" id='Q7-3' name='Q7' value='3' onChange={changeHandler} />
              </div>              
            </div>
            <div className='Que8 que'>
              <p>I felt that I was using a lot of nervous energy</p>
              <div className='options1'>
               <input type="radio" id='Q8-0' name='Q8' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q8-1' name='Q8' value='1' onChange={changeHandler} />
               <input type="radio" id='Q8-2' name='Q8' value='2' onChange={changeHandler} />
               <input type="radio" id='Q8-3' name='Q8' value='3' onChange={changeHandler} />
              </div>  
            </div>
            <div className='Que9 que'>
              <p>I was worried about situations in which I might panic and make a fool of myself</p>
              <div className='options1'>
               <input type="radio" id='Q9-0' name='Q9' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q9-1' name='Q9' value='1' onChange={changeHandler} />
               <input type="radio" id='Q9-2' name='Q9' value='2' onChange={changeHandler} />
               <input type="radio" id='Q9-3' name='Q9' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que10 que'>
              <p>I felt that I had nothing to look forward to</p>
              <div className='options1'>
               <input type="radio" id='Q10-0' name='Q10' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q10-1' name='Q10' value='1' onChange={changeHandler} />
               <input type="radio" id='Q10-2' name='Q10' value='2' onChange={changeHandler} />
               <input type="radio" id='Q10-3' name='Q10' value='3' onChange={changeHandler} />
              </div>              
            </div>

            {/* ************************ */}
            <div className='Que11 que'>
              <p>I found myself getting agitated</p>
              <div className='options1'>
               <input type="radio" id='Q11-0' name='Q11' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q11-1' name='Q11' value='1' onChange={changeHandler} />
               <input type="radio" id='Q11-2' name='Q11' value='2' onChange={changeHandler} />
               <input type="radio" id='Q11-3' name='Q11' value='3' onChange={changeHandler} />
              </div> 
            </div>
            <div className='Que12 que'>
              <p>I found it difficult to relax</p>
              <div className='options1'>
               <input type="radio" id='Q12-0' name='Q12' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q12-1' name='Q12' value='1' onChange={changeHandler} />
               <input type="radio" id='Q12-2' name='Q12' value='2' onChange={changeHandler} />
               <input type="radio" id='Q12-3' name='Q12' value='3' onChange={changeHandler} />
              </div> 
            </div>
            <div className='Que13 que'>
              <p>I felt down-hearted and blue</p>
              <div className='options1'>
               <input type="radio" id='Q13-0' name='Q13' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q13-1' name='Q13' value='1' onChange={changeHandler} />
               <input type="radio" id='Q13-2' name='Q13' value='2' onChange={changeHandler} />
               <input type="radio" id='Q13-3' name='Q13' value='3' onChange={changeHandler} />
              </div>              
            </div>
            <div className='Que14 que'>
              <p>I was intolerant of anything that kept me from getting on with what I was doing</p>
              <div className='options1'>
               <input type="radio" id='Q14-0' name='Q14' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q14-1' name='Q14' value='1' onChange={changeHandler} />
               <input type="radio" id='Q14-2' name='Q14' value='2' onChange={changeHandler} />
               <input type="radio" id='Q14-3' name='Q14' value='3' onChange={changeHandler} />
              </div>             
            </div>
            <div className='Que15 que'>
              <p>I felt I was close to panic</p>
              <div className='options1'>
               <input type="radio" id='Q15-0' name='Q15' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q15-1' name='Q15' value='1' onChange={changeHandler} />
               <input type="radio" id='Q15-2' name='Q15' value='2' onChange={changeHandler} />
               <input type="radio" id='Q15-3' name='Q15' value='3' onChange={changeHandler} />
              </div>
            </div>

            {/* *********************************** */}
            <div className='Que16 que'>
              <p>I was unable to become enthusiastic about anything</p>
              <div className='options1'>
               <input type="radio" id='Q16-0' name='Q16' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q16-1' name='Q16' value='1' onChange={changeHandler} />
               <input type="radio" id='Q16-2' name='Q16' value='2' onChange={changeHandler} />
               <input type="radio" id='Q16-3' name='Q16' value='3' onChange={changeHandler} />
              </div>               
            </div>
            <div className='Que17 que'>
              <p>I felt I wasn’t worth much as a person</p>
              <div className='options1'>
               <input type="radio" id='Q17-0' name='Q17' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q17-1' name='Q17' value='1' onChange={changeHandler} />
               <input type="radio" id='Q17-2' name='Q17' value='2' onChange={changeHandler} />
               <input type="radio" id='Q17-3' name='Q17' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que18 que'>
              <p>I felt that I was rather touchy</p>
              <div className='options1'>
               <input type="radio" id='Q18-0' name='Q18' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q18-1' name='Q18' value='1' onChange={changeHandler} />
               <input type="radio" id='Q18-2' name='Q18' value='2' onChange={changeHandler} />
               <input type="radio" id='Q18-3' name='Q18' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que19 que'>
              <p>I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)</p>
              <div className='options1'>
               <input type="radio" id='Q19-0' name='Q19' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q19-1' name='Q19' value='1' onChange={changeHandler} />
               <input type="radio" id='Q19-2' name='Q19' value='2' onChange={changeHandler} />
               <input type="radio" id='Q19-3' name='Q19' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que20 que'>
              <p>I felt scared without any good reason</p>
              <div className='options1'>
               <input type="radio" id='Q20-0' name='Q20' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q20-1' name='Q20' value='1' onChange={changeHandler} />
               <input type="radio" id='Q20-2' name='Q20' value='2' onChange={changeHandler} />
               <input type="radio" id='Q20-3' name='Q20' value='3' onChange={changeHandler} />
              </div>
            </div>
            <div className='Que21 que'>
              <p>I felt that life was meaningless</p>
              <div className='options1'>
               <input type="radio" id='Q21-0' name='Q21' value='0' onChange={changeHandler} required />
               <input type="radio" id='Q21-1' name='Q21' value='1' onChange={changeHandler} />
               <input type="radio" id='Q21-2' name='Q21' value='2' onChange={changeHandler} />
               <input type="radio" id='Q21-3' name='Q21' value='3' onChange={changeHandler} />
              </div>  
            </div>
            </div>
            {/* ************** */}
            <div>
              <button className='btn' onClick={submitHandler}>Submit</button>
            </div>
          </form>
       
        </div>
    )
}
