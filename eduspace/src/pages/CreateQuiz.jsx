// import React, { useState } from 'react'

// function CreateQuiz() {
//     // Properties
//   const [showResults, setShowResults] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const questions = [
//     {
//         text: "In which year was nelson mandela born",
//       options: [
//         { id: 0, text: "18 July 1918", isCorrect: false },
//         { id: 1, text: "23 June 1917", isCorrect: false },
//         { id: 2, text: "26 February 1920", isCorrect: false },
//         { id: 3, text: "6 January 1918", isCorrect: true },
//       ],
//     },
//     {
//       text: "What year was the Constitution of America written?",
//       options: [
//         { id: 0, text: "1787", isCorrect: true },
//         { id: 1, text: "1776", isCorrect: false },
//         { id: 2, text: "1774", isCorrect: false },
//         { id: 3, text: "1826", isCorrect: false },
//       ],
//     },
//     {
//       text: "Who was the second president of the US?",
//       options: [
//         { id: 0, text: "John Adams", isCorrect: true },
//         { id: 1, text: "Paul Revere", isCorrect: false },
//         { id: 2, text: "Thomas Jefferson", isCorrect: false },
//         { id: 3, text: "Benjamin Franklin", isCorrect: false },
//       ],
//     },
//     {
//       text: "What is the largest state in the US?",
//       options: [
//         { id: 0, text: "California", isCorrect: false },
//         { id: 1, text: "Alaska", isCorrect: true },
//         { id: 2, text: "Texas", isCorrect: false },
//         { id: 3, text: "Montana", isCorrect: false },
//       ],
//     },
//     {
//       text: "Which of the following countries DO NOT border the US?",
//       options: [
//         { id: 0, text: "Canada", isCorrect: false },
//         { id: 1, text: "Russia", isCorrect: true },
//         { id: 2, text: "Cuba", isCorrect: true },
//         { id: 3, text: "Mexico", isCorrect: false },
//       ],
//     },
//   ];

//   // Helper Functions

//   /* A possible answer was clicked */
//   const optionClicked = (isCorrect) => {
//     // Increment the score
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   /* Resets the game back to default */
//   const restartGame = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setShowResults(false);
//   };

//   return (
//     <div className="App">
//       {/* 1. Header  */}
//       <h1>USA Quiz 🇺🇸</h1>

//       {/* 2. Current Score  */}
//       <h2>Score: {score}</h2>

//       {/* 3. Show results or show the question game  */}
//       {showResults ? (
//         /* 4. Final Results */
//         <div className="final-results">
//           <h1>Final Results</h1>
//           <h2>
//             {score} out of {questions.length} correct - (
//             {(score / questions.length) * 100}%)
//           </h2>
//           <button className='quizbut' onClick={() => restartGame()}>Restart game</button>
//         </div>
//       ) : (
//         /* 5. Question Card  */
//         <div className="question-card">
//           {/* Current Question  */}
//           <h2>
//             Question: {currentQuestion + 1} out of {questions.length}
//           </h2>
//           <h3 className="question-text">{questions[currentQuestion].text}</h3>

//           {/* List of possible answers  */}
//           <ul>
//             {questions[currentQuestion].options.map((option) => {
//               return (
//                 <li
//                   key={option.id}
//                   onClick={() => optionClicked(option.isCorrect)}
//                 >
//                   {option.text}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CreateQuiz

import React, { useState } from 'react'
import AddQuestions from '../components/AddQuestions'

function CreateQuiz() {

  const [questions, setQuestions] = useState([])  
  return (
    <>
    <div className='wrapper4'>
        <AddQuestions setQuestions={setQuestions} />
        <ul className='hele'>
            {questions.map(question => <Question firstQuestion={question.firstQuestion} option1={question.option1} option2={question.option2} option3={question.option3} option4={question.option4} />)}
        </ul>
    </div>
    </>
  )
}

function Question(props) {
    return <li>{props.firstQuestion} 1. {props.option1} 2. {props.option2} 
    3. {props.option3} 4. {props.option4}</li>
}

export default CreateQuiz