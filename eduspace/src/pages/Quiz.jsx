import React, { useEffect, useState } from 'react'
import { getDocs } from 'firebase/firestore';
import { allQuiz } from '../lib/firestore-collections';
import SideBar from '../components/SideBar';

async function getQuiz() {  //this function retrieves all quizes from the database
  const querySnapshot = await getDocs(allQuiz);
  return querySnapshot.docs
    .map((doc) => ({
      data: doc.data(),
      id: doc.id
    }));
}

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

    //setting the current question and showing results when the end of the quiz is reached
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
        <h2>Score: {score}</h2>

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

{/* displaying each answer option, and when it is clicked, it is processed */}
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
