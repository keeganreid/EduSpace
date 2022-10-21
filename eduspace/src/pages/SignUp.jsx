//The page where you sign up if you are not a registered user
import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';
import { NavLink, useNavigate } from 'react-router-dom';
import showPwdImg from '../images/showPassword.svg';
import hidePwdImg from '../images/hidePassword.svg';

const SignUp = () => {
    const emailRef = useRef()  //input references
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const {currentUser} = useAuth();
    const [isRevealPwd, setIsRevealPwd] = useState(false); //password and confirm password show/hide states
    const [isRevealCPwd, setIsRevealCPwd] = useState(false);



     useEffect(() => {  //if user is logged in navigate
        if(currentUser) {
            if (currentUser.displayName === undefined){ //if they haven't completed their profile then to create profile
            navigate('/createprofile')
            }
            else{
                navigate('/home'); //otherwise home
            }
        }
    }, [])
    

    async function handleSubmit(e) {
        e.preventDefault();

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value))) {  //checking email is valid
            return setError("Please enter a valid email address.");
        }

        if (passwordRef.current.value.length < 6) {
            return setError("Please enter a password of at least 6 characters.");  //checking password is atleast 6 chars
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) { //comparing the password inputs
            return setError("Passwords do not match.");
        }


        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value) //calling firebase signup function
        } catch (e) {
            console.log(e);
            if (e.code === "auth/email-already-in-use") {
                setError("Email already in use.")  //email in use
            }
            else {
                setError("Cannot create an account.");
            }
            setLoading(false);
            return;
        }

        setLoading(false);
        navigate('/createprofile'); //continue the signup process
    }

    return (
        <>
            <section className='marginPage'>
                <h1 className='pageHeading'>Sign Up</h1>

                <div className='login-register-back'>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email">
                            Email Address <span className='redText'>*</span>
                        </label>
                        <br></br>
                        <input
                            className='textInput'
                            placeholder="Email Address"
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            required
                        />
                        <br></br>
                        <br></br>

                        <label htmlFor="password">
                            Password
                        </label> <span className='redText'>*</span>

                        <br></br>
                        <div className="pwd-container">
                            <input
                                name="password"
                                placeholder="Password"
                                type={isRevealPwd ? "text" : "password"}
                                ref={passwordRef}
                                className='textInput'
                                required
                                id="password"
                            />
                            <img
                                title={isRevealPwd ? "Hide password" : "Show password"}  //hide/show password eye
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                                alt="Hide/Show Password Eye"
                            />
                        </div>
                        <br></br>
                        <label htmlFor="confirm_pwd">
                            Confirm Password
                        </label> <span className='redText'>*</span>
                        <br></br>
                        <div className="pwd-container">
                            <input
                                name="password"
                                placeholder="Confirm Password"
                                type={isRevealCPwd ? "text" : "password"}
                                ref={passwordConfirmRef}
                                className='textInput'
                                required
                                id="confirm_pwd"
                            />
                            <img
                                title={isRevealCPwd ? "Hide password" : "Show password"}
                                src={isRevealCPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealCPwd(prevState => !prevState)}
                                alt="Hide/Show Password Eye"
                            />
                        </div>
                        <br></br>
                        {/* button is disabled while loading to prevent users signing up more than once */}
                        <button disabled={loading} className='bigButton'>Sign Up</button>
                    </form>
                    <br></br>
                    <label> Already registered? <span>
                        <NavLink to="/login" className="signIn">Sign In</NavLink>
                    </span></label>
                    <br></br>
                    <p className={"errorMessage"} aria-live="assertive">{error}</p>
                </div>
        <div className='waveContainer'>
            <div className='wave'></div>
        </div>
            </section>
        </>
    )
}


export default SignUp;