//Page where you log in 
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'
import showPwdImg from '../images/showPassword.svg';
import hidePwdImg from '../images/hidePassword.svg';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [isRevealPwd, setIsRevealPwd] = useState(false);

   /* useEffect(() => {
        if(currentUser) {
            navigate('/')
        }
    }, [])

    */

    const handleKeypress = e => {
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  

    async function handleSubmit(e) {
        e.preventDefault();

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value)))
        {
          return setError("Please enter a valid email address.");
        }


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch(e) {
            console.log(e)
            setError("Email/Password combination not found.")
            setLoading(false);
            return;
        }

        setLoading(false);
        if (currentUser.displayName === null){
        navigate("/createprofile");
        }
        else{
            navigate("/home")
        }
    }

    return (
        <>
            <section className='marginPage' onKeyDown={handleKeypress}>
                <h1 className='pageHeading'>Login</h1>
                <div className='login-register-back'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <br></br>
                    <input
                        type="text"
                        className='textInput'
                        placeholder='Email Address'
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        required
                    />
                    <br></br>
                    <br></br>
                    <label htmlFor="password">
                        Password
                    </label>
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
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                                alt="Hide/Show Password Eye"
                            />
                        </div>
                    <br></br>
                    <button disabled={loading} className='bigButton'>Log In</button>
                </form>
                <br></br>
                <label>Not registered? <span><NavLink to="/signup" className='signIn'>Sign Up</NavLink></span></label>
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

export default Login