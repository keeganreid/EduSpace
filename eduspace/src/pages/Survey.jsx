import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Styles.css';

function Survey() {
    const history = useNavigate();

  return (
    <div class="wrapper">
        <div className='firstitem'>
            <h1>Survey</h1>
            <h2>Earn stoints!</h2>
        </div>
        <div className="item1">
            <h1>Agriscience</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item2">
            <h1>Economic and Management Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item3">
            <h1>Arts and Social Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item4">
            <h1>Education</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item5">
            <h1>Engineering</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item6">
            <h1>Law</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item7">
            <h1>Medicine and Health Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item8">
            <h1>Science</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item9">
            <h1>Theology</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>
        <div className="item10">
            <h1>Military Sciences</h1>
            <button className='click' onClick={() => history('/FunctionalitySurvey')}>
                Click here for survey
            </button>
        </div>


        {/* <p className="a3">
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
    </p> */}
    </div>
  )
}

export default Survey

