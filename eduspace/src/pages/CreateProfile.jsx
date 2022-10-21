import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';
import { useNavigate } from 'react-router-dom';
import userIcon from '../images/user.png';
import { users } from '../lib/firestore-collections';
import { getDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';


const SignUp = () => {
    const fullnameRef = useRef();
    const companyNameRef = useRef();
    const companyURLRef = useRef();
    const usernameRef = useRef();
    const bioRef = useRef();
    const facultyRef = useRef();
    const degreeRef = useRef();

    const [pfp, setPfp] = useState(userIcon);
    const [image, setImage] = useState(null);
    const { currentUser, updateUserProfile } = useAuth()
    const navigate = useNavigate();
    const [userType, setUserType] = useState(null);

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getUserDetails = async (userID) => {
        const userRef = doc(users, userID);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            setUserType(docSnap.data().type);
        }
    }

    useEffect(() => {
        // if(currentUser.username !== undefined) {
        //     navigate('/editProfile')
        // }
        getUserDetails(currentUser.uid)


    }, [currentUser.uid])


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await updateUserProfile(image, usernameRef, companyNameRef,
                companyURLRef, fullnameRef,
                facultyRef, degreeRef, bioRef);
        } catch (e) {
            console.log(e);
            setError("Cannot create profile");
            setLoading(false);
            return;
        }

        setLoading(false);
        navigate('/home');
    }

    function imageUpload(e) {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setPfp(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setImage(e.target.files[0]);
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className='marginPage'>
                {userType === 'company' && (
                    <h1 className='pageHeading'>Create a company profile</h1>
                )}
                {userType === 'student' && (
                    <h1 className='pageHeading'>Create a student profile</h1>
                )}

                <div className='login-register-back'>
                    <div>
                        <img className='dot' alt='Profile' id='profileImg' style={{ 'marginLeft': '40%', 'marginRight': '40%' }}
                            src={pfp} />
                        <br></br>
                        <br></br>
                        <label htmlFor='fileUpload' style={{ 'marginLeft': '40%', 'marginRight': '40%' }} className='signIn' >Select Image</label>
                        <input type='file' accept='image/*' id='fileUpload' onChange={imageUpload} style={{ 'visibility': 'hidden' }} />
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

                        {userType === 'company' && (
                            <>
                                <label htmlFor="companyName">
                                    Company name
                                </label> <span className='redText'>*</span>

                                <br></br>
                                <input
                                    className='textInput'
                                    placeholder="Company name"
                                    type="text"
                                    id="companyName"
                                    ref={companyNameRef}
                                    autoComplete="off"
                                    required
                                />
                                <br></br>
                                <br></br>
                                <label htmlFor="companyURL">
                                    Company website
                                </label> <span className='redText'>*</span>

                                <br></br>
                                <input
                                    className='textInput'
                                    placeholder="Company website"
                                    type="text"
                                    id="companyURL"
                                    ref={companyURLRef}
                                    autoComplete="off"
                                    required
                                />
                                <br></br>
                                <br></br>
                            </>
                        )}

                        {userType === 'student' && (
                            <>
                                <label htmlFor="fullname">
                                    Full name
                                </label> <span className='redText'>*</span>

                                <br></br>
                                <input
                                    className='textInput'
                                    placeholder="Full name"
                                    type="text"
                                    id="fullname"
                                    ref={fullnameRef}
                                    autoComplete="off"
                                    required
                                />
                                <br></br>
                                <br></br>
                                <label htmlFor="faculty">
                                    University Faculty
                                </label> <span className='redText'>*</span>
                                <br></br>
                                <input
                                    className='textInput'
                                    placeholder="Faculty"
                                    type="text"
                                    id="faculty"
                                    ref={facultyRef}
                                    autoComplete="off"
                                    required
                                />
                                <br></br>
                                <br></br>
                                <label htmlFor="degree">
                                    Degree/Diploma
                                </label> <span className='redText'>*</span>
                                <br></br>
                                <input
                                    className='textInput'
                                    placeholder="Degree/Diploma"
                                    type="text"
                                    id="degree"
                                    ref={degreeRef}
                                    autoComplete="off"
                                    required
                                />
                                <br></br>
                                <br></br>

                            </>
                        )}

                        <label htmlFor="bio">
                            About
                        </label><span className='redText'> *</span>
                        <br></br>
                        <textarea
                            className='bigTextArea'
                            placeholder="About"
                            id="bio"
                            ref={bioRef}
                            autoComplete="off"
                            required
                        />
                        <br></br>
                        <button disabled={loading} className='bigButton'>Create Profile</button>
                    </form>
                    <p className={"errorMessage"} aria-live="assertive">{error}</p>
                </div>
                <div className='waveContainer' style={{ 'bottom': '-20vh' }}>
                    <div className='wave'></div>
                </div>
            </section>



        </motion.div>
    )
}


export default SignUp;