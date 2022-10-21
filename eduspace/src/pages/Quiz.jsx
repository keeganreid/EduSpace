import React, { useEffect, useState } from 'react'
import { getDocs } from 'firebase/firestore';
import { allQuiz } from '../lib/firestore-collections';
import SideBar from '../components/SideBar';

async function getQuiz() { // <-- note switching to argument here
  const querySnapshot = await getDocs(allQuiz);
  return querySnapshot.docs
    .map((doc) => ({
      data: doc.data(),
      id: doc.id
    })); // note removal of error suppression
}

// async function getMultipleRandomQuestionIDs(arr, num) {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());

//   return shuffled.slice(0, num);
// }





export default function CreateQuiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState([]);

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  useEffect(
    () => {
      getQuiz().then((quizData) => {
        setQuiz(quizData);
      })
    }, [])


  let htmlCode;

  if (quiz.length !== 0){
 htmlCode = (
    <>
    <SideBar/>
      <div className="App">
        {/* 1. Header  */}
        <h1 className='pageHeading'>Quiz</h1>

        {/* 2. Current Score  */}
        <h2 style={{'marginLeft': '10em'}}>Score: {score}</h2>

        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {quiz.length} correct (
              {(score / quiz.length) * 100}%)
            </h2>
            <button className='quizbut' onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="question-card">
            {/* Current Question  */}
            <h2 style={{'marginLeft': '2em'}}>
              Question: {currentQuestion + 1} out of {quiz.length}
            </h2>
            <h3 className="question-text" style={{'marginLeft': '2em'}}>{quiz[currentQuestion].data.text}</h3>


            <ul className='ulquiz'>
              <li onClick={() => optionClicked(quiz[currentQuestion].data.options.option0.isCorrect)} className='liquiz'>
                {quiz[currentQuestion].data.options.option0.text}
              </li>
              <li onClick={() => optionClicked(quiz[currentQuestion].data.options.option1.isCorrect)}className='liquiz'>
                {quiz[currentQuestion].data.options.option1.text}
              </li>
              <li onClick={() => optionClicked(quiz[currentQuestion].data.options.option2.isCorrect)}className='liquiz'>
                {quiz[currentQuestion].data.options.option2.text}
              </li>
              <li onClick={() => optionClicked(quiz[currentQuestion].data.options.option3.isCorrect)}className='liquiz'>
                {quiz[currentQuestion].data.options.option3.text}
              </li>
            </ul>
          </div>
        )}
      </div>

    </>)

}
else{
  htmlCode = (<><SideBar/></>);
}
  
  return(<>{htmlCode}</>)

}

// import React, { useState } from 'react'
// import AddQuestions from '../components/AddQuestions'

// function CreateQuiz() {

//   const [questions, setQuestions] = useState([])
//   return (
//     <>
//     <div className='wrapper4'>
//         <AddQuestions setQuestions={setQuestions} />
//         <ul className='hele'>
//             {questions.map(question => <Question firstQuestion={question.firstQuestion} option1={question.option1} option2={question.option2} option3={question.option3} option4={question.option4} />)}
//         </ul>
//     </div>
//     </>
//   )
// }

// function Question(props) {
//     return <li>{props.firstQuestion} 1. {props.option1} 2. {props.option2}
//     3. {props.option3} 4. {props.option4}</li>
// }

// export default CreateQuiz