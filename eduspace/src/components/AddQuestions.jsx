import React, { useState } from 'react'

function AddQuestions(props) {

  const [firstQuestion, setFirstQuestion] = useState()
  const [option1, setOption1] = useState()  
  const [option2, setOption2] = useState()
  const [option3, setOption3] = useState()  
  const [option4, setOption4] = useState()

  function handleSubmit(e){
    e.preventDefault()
    props.setQuestions(prev => prev.concat({firstQuestion,option1,option2,option3,option4}))
    setFirstQuestion("")
    setOption1("")
    setOption2("")
    setOption3("")
    setOption4("")
  }  

  return (
    <div className='wrapper5'>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>First Question</legend>
            <input className='vraag' value={firstQuestion} onChange={e => setFirstQuestion(e.target.value)} placeholder='Question' />
            <input className='antwoord1' value={option1} onChange={e => setOption1(e.target.value)} placeholder='Option 1' />
            <input className='antwoord2' value={option2} onChange={e => setOption2(e.target.value)} placeholder='Option 2' />
            <input className='antwoord3' value={option3} onChange={e => setOption3(e.target.value)} placeholder='Option 3' />
            <input className='antwoord4' value={option4} onChange={e => setOption4(e.target.value)} placeholder='Option 4' />
            <button>Add Question</button>
        </fieldset>
    </form>
    </div>
  )
}

export default AddQuestions