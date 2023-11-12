import './chat.css';
import img from './icons/send.png';
import img1 from './icons/ellipse.png';
import img2 from './icons/Ellipse-3.png';
import React, { useEffect, useState, useRef } from 'react';
import Axios from "axios";
import { useNavigate, useRoutes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';





const Chat = () =>{

  Axios.defaults.withCredentials = true;
  const [question, setQuestion] = useState("");
  console.log(question)

  const login = () => {
    Axios.post("http://localhost:3001/l", {
      question: question,
    }).then((response) => {
      console.log(response);
      console.log("avava")
    })
  }

    return(

      <div className='sending' >
        
        <input className='textt' type ="text" placeholder='Send your question' onChange={(e) => setQuestion(e.target.value)} />
       <div className='iconn'>
       <img src={img} alt="image" className="iconn" onClick={()=>{
                login()
                }} />
       {/* <button  className="login-btn" onClick={()=>{
                login()
                }} type="button">Se connecter</button> */}
       </div>
     
      <div className="msg1">

        <div className="img1"> 
      <img src={img1} alt="image" className="img1" />
      </div>
        <p className="par">{question}</p>
      </div>
      <div className="msg2">
<div className="img2"> 
<img src={img2} alt="image" className="img2" />
</div>
<p className="par2">YES ! regarding the BBC NEWS Journal which has 8.8 point as a trusted resources,The world’s largest floating solar farm, which is located in north-eastern Thailand, went into operation a year ago.
With over 144,000 solar panels, the farm is the size of 70 football fields.
But can this floating solar farm help Thailand reach its net zero goal faster?
Video by BBC Thai’s Napasin Samkaewcham and Watchira..... </p>
</div>
      </div>
          );
          }



    
export default Chat;











