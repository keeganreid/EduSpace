import React, { useState, useRef } from 'react';
import {  addDoc } from 'firebase/firestore';
//import '../styles/style.css';
import { allQuiz } from '../lib/firestore-collections';
function AddQuestions(props) {

  const [firstQuestion, setFirstQuestion] = useState()
  const [option1, setOption1] = useState()  
  const [option2, setOption2] = useState()
  const [option3, setOption3] = useState()  
  const [option4, setOption4] = useState();

  function handleSubmit(e){

    /*const id = useRef();
    const messageRef= useRef();
    const topicRef = useRef();*/

    e.preventDefault()
    props.setQuestions(prev => prev.concat({firstQuestion,option1,option2,option3,option4}))
    setFirstQuestion("")
    setOption1("")
    setOption2("")
    setOption3("")
    setOption4("")
  }  

  function handleSubmit(e){
   //console.log(option1);
    return true;
    }

  return (
    <div className='wrapper5'>
    
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Add Question</legend>
            
            <input className='vraag' value={firstQuestion} onChange={e => setFirstQuestion(e.target.value)} placeholder='Question' />
           
            <p></p>
            
            <input className='antwoord1' value={option1} onChange={e => setOption1(e.target.value)} placeholder='Option 1' />
            <button onClick={handleSubmit}><input type="radio" name="ans" value={option1}/>Ans</button>             <p></p>
            
            <input className='antwoord2' value={option2} onChange={e => setOption2(e.target.value)} placeholder='Option 2' />
            <button onClick={handleSubmit}><input type="radio" name="ans" value={option2}/>Ans</button>            <p></p>
           
            <input className='antwoord3' value={option3} onChange={e => setOption3(e.target.value)} placeholder='Option 3' />
            <button onClick={handleSubmit}><input type="radio" name="ans" value={option3}/>Ans</button>            <p></p>
            
            <input className='antwoord4' value={option4} onChange={e => setOption4(e.target.value)} placeholder='Option 4' />
            <button onClick={handleSubmit}><input type="radio" name="ans" value={option4}/>Ans</button>            <p></p>
            
            <button onClick={handleSubmit}>Add Question</button>

            <p></p>
        </fieldset>
    </form>
    </div>

    
  )
}

export default AddQuestions