import React, { useRef, useState} from 'react';
import { useAuth } from '../contexts/auth-context';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)



    async function handleSubmit(e) {
        e.preventDefault();

        if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value))) ||
        (emailRef.current.value.substring(emailRef.current.value.indexOf('@') + 1) !== "sun.ac.za") )
        {
          return setError("Please enter a valid Stellenbosch University email address.");
        }

        if (passwordRef.current.value.length < 6){
            return setError("Please enter a password of at least 6 characters.");
        }

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match.");
        }

   
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch(e) {
            console.log(e)
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <section>
                <p className={"errmsg"} aria-live="assertive">{error}</p>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordRef}
                    />
                        <p></p>
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    
                    <input
                        type="password"
                        id="confirm_pwd"
                        required
                        ref={passwordConfirmRef}
                    />

                    <button disabled={loading}>Sign Up</button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                        <NavLink to="/login">Sign In</NavLink>
                    </span>
                </p>
            </section>
        </>
    )
}

export default SignUp;