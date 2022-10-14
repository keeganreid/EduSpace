import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Styles.css';

function Survey() {
    const history = useNavigate();

  return (
    <div>
        <h1>Survey</h1>
        <h2>Earn stoints!</h2>
        {/* <p style={{"border-width": "3px", "border-style":"solid", "border-color":"#287EC7"}}> */}
        <p className="a1">
            <h1>Agriscience</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a2">
            <h1>Economic and Management Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a3">
            <h1>Arts and Social Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a4">
            <h1>Education</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a5">
            <h1>Engineering</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a6">
            <h1>Law</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a7">
            <h1>Medicine and Health Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a8">
            <h1>Science</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a9">
            <h1>Theology</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
        <p className="a10">
            <h1>Military Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </p>
    </div>
  )
}

export default Survey

