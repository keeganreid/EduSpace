import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { addDoc } from 'firebase/firestore';
import { allQuiz } from '../lib/firestore-collections';
import { FaPray } from 'react-icons/fa';
import { browserLocalPersistence } from 'firebase/auth';

function AddQuestions() {
  const questionRef = useRef();
  const option1Ref = useRef();
  const option2Ref = useRef();
  const option3Ref = useRef();
  const option4Ref = useRef();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState('0');

  const isRadioSelected = (value) => selectedAnswer === value;

  const handleRadioClick = (e) => setSelectedAnswer(e.currentTarget.value);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    console.log(selectedAnswer);

      let options; 
      switch (selectedAnswer){
        case '0': options ={
          option0:{
            id: 0,
            isCorrect: true,
            text: option1Ref.current.value
          },
          option1:{
            id: 1,
            isCorrect: false,
            text: option2Ref.current.value
          },
          option2:{
            id: 2,
            isCorrect: false,
            text: option3Ref.current.value
          },
          option3:{
            id: 3,
            isCorrect: false,
            text: option4Ref.current.value
          }
        }
          break;

          case '1': options ={
            option0:{
              id: 0,
              isCorrect: false,
              text: option1Ref.current.value
            },
            option1:{
              id: 1,
              isCorrect: true,
              text: option2Ref.current.value
            },
            option2:{
              id: 2,
              isCorrect: false,
              text: option3Ref.current.value
            },
            option3:{
              id: 3,
              isCorrect: false,
              text: option4Ref.current.value
            }
          }

          break;

          case '2': options ={
            option0:{
              id: 0,
              isCorrect: false,
              text: option1Ref.current.value
            },
            option1:{
              id: 1,
              isCorrect: false,
              text: option2Ref.current.value
            },
            option2:{
              id: 2,
              isCorrect: true,
              text: option3Ref.current.value
            },
            option3:{
              id: 3,
              isCorrect: false,
              text: option4Ref.current.value
            }
          }
          
          break;

          case '3': options ={
            option0:{
              id: 0,
              isCorrect: false,
              text: option1Ref.current.value
            },
            option1:{
              id: 1,
              isCorrect: false,
              text: option2Ref.current.value
            },
            option2:{
              id: 2,
              isCorrect: false,
              text: option3Ref.current.value
            },
            option3:{
              id: 3,
              isCorrect: true,
              text: option4Ref.current.value
            }
          }

          break;

          default: options ={
            option0:{
              id: 0,
              isCorrect: true,
              text: option1Ref.current.value
            },
            option1:{
              id: 1,
              isCorrect: false,
              text: option2Ref.current.value
            },
            option2:{
              id: 2,
              isCorrect: false,
              text: option3Ref.current.value
            },
            option3:{
              id: 3,
              isCorrect: false,
              text: option4Ref.current.value
            }
          }

    }

    try{
    addDoc(allQuiz, {text: questionRef.current.value, options});
    setError("");
    }
    catch(error){
      setError(error);
    }

    questionRef.current.value = "";
    option1Ref.current.value = "";
    option2Ref.current.value = "";
    option3Ref.current.value = "";
    option4Ref.current.value = "";

    setLoading(false);
  }




  return (
    <div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className='marginPage'>
          <h1 className='pageHeading'>Add a question to the quiz bank</h1>
          <div className='addQuestion'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="question">
                Question <span className='redText'> *</span>
              </label>
              <br></br>
              <input
                className='textInput'
                placeholder="Question"
                type="text"
                id="question"
                ref={questionRef}
                autoComplete="off"
                required
                style={{ 'marginRight': '2em' }}
              />
              <br></br>
              <br></br>
              <label htmlFor="option1">
                Option 1<span className='redText'> *</span>
              </label>
              <br></br>
              <div>
                <input
                  className='textInput'
                  placeholder="Option 1"
                  type="text"
                  id="option1"
                  ref={option1Ref}
                  autoComplete="off"
                  required
                />
                <input type='radio' value="0" checked={isRadioSelected("0")} onChange={handleRadioClick} />
                <label>Answer</label>
              </div>
              <br></br>
              <label htmlFor="option2">
                Option 2<span className='redText'> *</span>
              </label>
              <br></br>
              <div>
                <input
                  className='textInput'
                  placeholder="Option 2"
                  type="text"
                  id="option2"
                  ref={option2Ref}
                  autoComplete="off"
                  required
                />
                <input type='radio' value="1" checked={isRadioSelected("1")} onChange={handleRadioClick} />
                <label>Answer</label>
              </div>
              <br></br>
              <label htmlFor="option3">
                Option 3<span className='redText'> *</span>
              </label>
              <br></br>
              <div>
                <input
                  className='textInput'
                  placeholder="Option 3"
                  type="text"
                  id="option3"
                  ref={option3Ref}
                  autoComplete="off"
                  required
                />
                <input type='radio' value="2" checked={isRadioSelected("2")} onChange={handleRadioClick} />
                <label>Answer</label>
              </div>
              <br></br>
              <label htmlFor="option4">
                Option 4<span className='redText'> *</span>
              </label>
              <br></br>
              <div>
                <input
                  className='textInput'
                  placeholder="Option 4"
                  type="text"
                  id="option4"
                  ref={option4Ref}
                  autoComplete="off"
                  required
                />
                <input type='radio' value="3" checked={isRadioSelected("3")} onChange={handleRadioClick} />
                <label>Answer</label>
              </div>
              <button type='submit' disabled={loading} className='bigButton' style={{ 'marginRight': '3em' }}>Add</button>
            </form>
            <p className={"errorMessage"} aria-live="assertive">{error}</p>
          </div>
        </section>
      </motion.div>
      <div className='waveContainer' style={{ 'bottom': '-10vh' }}>
        <div className='wave'></div>
      </div>
    </div>
  )
}

export default AddQuestions