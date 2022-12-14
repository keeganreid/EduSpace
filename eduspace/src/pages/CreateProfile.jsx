import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';
import { useNavigate } from 'react-router-dom';
import userIcon from '../images/user.png';
import { users } from '../lib/firestore-collections';
import { getDoc, doc } from 'firebase/firestore';
import { motion } from 'framer-motion';


const SignUp = () => { //references to input fields
    const fullnameRef = useRef();   
    const companyNameRef = useRef();
    const companyURLRef = useRef();
    const usernameRef = useRef();
    const bioRef = useRef();
    const facultyRef = useRef();
    const degreeRef = useRef();

    const [pfp, setPfp] = useState(userIcon); //used for setting a temporary image to display on a file upload
    const [image, setImage] = useState(null); //stored in the database as a URL
    const { currentUser, updateUserProfile } = useAuth()
    const navigate = useNavigate();
    const [userType, setUserType] = useState(null);

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const getUserDetails = async (userID) => {  //gets the type of the user, as business and students have different fields
        const userRef = doc(users, userID);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            setUserType(docSnap.data().type); 
        }
    }

    useEffect(() => {
        if(currentUser) {
            if (currentUser.displayName !== undefined){
            navigate('/home')
            }
            else{
            getUserDetails(currentUser.uid)
            }
        }
        else{
            navigate('/login')
        }
    }, [currentUser.uid])


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await updateUserProfile(userType, image, usernameRef, companyNameRef,  //call the auth context method to update profile
                companyURLRef, fullnameRef,
                facultyRef, degreeRef, bioRef);
        } catch (e) {
            setError("Cannot create profile");
            setLoading(false);
            return;
        }

        setLoading(false);
        navigate('/home');
    }

    function imageUpload(e) {  //function for setting the state used for the preview image and that which will be uploaded to firebase
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
                {userType === 'company' && (  //we get the type earlier to check if the page must be rendered for a company or student
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
                        {/* input check to make sure file is an image */}
                        <input type='file' accept='image/*' id='fileUpload' onChange={imageUpload} style={{ 'visibility': 'hidden' }} />
                    </div>
                    <form onSubmit={handleSubmit} style={{"textAlign": "left"}} >
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

                        {userType === 'company' && (  //displaying company-specific inputs 
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

                        {userType === 'student' && ( //displaying student-specific fields
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
                <div className='waveContainer' style={{ 'bottom': '-30vh' }}>
                    <div className='wave'></div>
                </div>
            </section>



        </motion.div>
    )
}


export default SignUp;