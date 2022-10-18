import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';
import { NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../images/user.png';

const SignUp = () => {
    const firstNameRef = useRef();
    const surnameRef = useRef();
    const usernameRef = useRef();
    const bioRef = useRef();
    const facultyRef = useRef();
    const degreeRef = useRef();

    const { currentUser, updateProfile } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    // useEffect(() => {
    //     if(currentUser.username !== undefined) {
    //         navigate('/editProfile')
    //     }
    // }, [])
    

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await updateProfile( usernameRef, firstNameRef.current.value, surnameRef.current.value, bioRef,
                facultyRef, degreeRef);
        } catch (e) {
            console.log(e);
                setError("Cannot create profile");
               setLoading(false);
               return;
            }

            setLoading(false);
            navigate('/');
    }

    return (
        <>
            <section className='marginPage' onKeyDown={handleKeypress}>
                <h1 className='pageHeading'>Create a profile</h1>

                <div className='login-register-back'>
                    <div>
                    <img className='dot' alt='Profile' id='profileImg' style={{'margin-left': '40%', 'margin-right': '40%'}}
                    src={userIcon}/>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username">
                            Username <span className='redText'>*</span>
                        </label>
                        <br></br>
                        <input
                            className='textInput'
                            placeholder="Username"
                            type="text"
                            id="username"
                            ref={usernameRef}
                            autoComplete="off"
                            required
                        />
                        <br></br>
                        <br></br>

                        <label htmlFor="firstName">
                            First name
                        </label> <span className='redText'>*</span>

                        <br></br>
                        <input
                            className='textInput'
                            placeholder="First name"
                            type="text"
                            id="firstName"
                            ref={firstNameRef}
                            autoComplete="off"
                            required
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="surname">
                            Surname
                        </label> <span className='redText'>*</span>
                        <br></br>
                        <input
                            className='textInput'
                            placeholder="Surname"
                            type="text"
                            id="surname"
                            ref={surnameRef}
                            autoComplete="off"
                            required
                        />
                        <br></br>
                        <br></br>
                        <label htmlFor="bio">
                            About
                        </label>
                        <br></br>
                        <textarea
                            className='bigTextArea'
                            placeholder="About"
                            id="bio"
                            ref={bioRef}
                            autoComplete="off"
                        />
                        <br></br>
                        <button disabled={loading} className='bigButton'>Create Profile</button>
                    </form>
                    <p className={"errorMessage"} aria-live="assertive">{error}</p>
                </div>
            </section>
        </>
    )
}


export default SignUp;