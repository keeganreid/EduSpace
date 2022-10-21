import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import SideBar from "../components/SideBar";
import { setDoc, collection, addDoc, doc } from 'firebase/firestore';
import { allSessions, users } from "../lib/firestore-collections";
import { useRef } from "react";
import books from '../images/books.png';
import { storage } from '../lib/init-firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuth } from '../contexts/auth-context';
import CurrencyInput from 'react-currency-input-field';

export default function CreateSession() {
//under is declared the different opotions for venues to be selected
    const venueOptions = [
        {
            name: "Arts and Social Sciences",
            value: 1
        },
        {
            name: "Van der Sterr ",
         value: 2
        },
        {
            name: "Neelsie",
            value: 3
        },
        {
            name: "Engineering",
            value: 4
        },
        {
            name: "Merrensky Building",
            value: 5
        },
        {
            name: "Mathematical Sciences and Industrial Psychology",
            value: 6
        },
        {
            name: "First Year Chemistry Building",
            value: 7
        },
        {
            name: "Schumann Annex",
            value: 8
        },
        {
            name: "Krotoa Building",
            value: 9
        },
        {
            name: "JC Smuts",
            value: 10
        }
    ]

    const [isOnline, setIsonline] = useState(true);

    const [venueState, setVenuestate] = useState(1);

    const [Image, setImage] = useState(null);

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const [tempImage, setTempImage] = useState(books);

    const { currentUser } = useAuth();

    const moduleRef = useRef();

    const priceRef = useRef();




    function handleChange() {

        setIsonline(!isOnline)

    }

    function handlevenueChange(e) {

        setVenuestate(e.target.value)

        console.log(venueState)

    }



//Funtion to be declared to be able to upload an image to the session and it is also stored on the firebase
    function imageUpload(e) {

        const reader = new FileReader();

        reader.onload = () => {

            if (reader.readyState === 2) {

                setTempImage(reader.result);

            }

        }

        reader.readAsDataURL(e.target.files[0]);

        setImage(e.target.files[0]);

    }




    async function handleImageUpload() {

        const fileRef = ref(storage, `sessionPictures/${Image.name}`);

        const snapshot = await uploadBytes(fileRef, Image)

        return await getDownloadURL(fileRef);

    }



//To be able to selsct a date that is meant to be today or in the future
    function handleDate(e) {

        var today = new Date();

        console.log(today)




        var selected = new Date(e.target.value);

        if ((selected) >= today) {

            setError("");

            setDate(e.target.value)

        }

        else {

            setError("Please choose a valid date.");

        }

    }


    async function handleSubmit(e) {

        e.preventDefault();

        setLoading(true)

        let file;

        if (Image === null) {

            file = 'https://firebasestorage.googleapis.com/v0/b/eduspace-ed18f.appspot.com/o/defaultProfile%2Fbooks.png?alt=media&token=4762ff84-8f37-4a23-ae54-7049a55a78dd';

        }

        else {

            file = await handleImageUpload();

        }

        let venue;

        if (isOnline) {

            venue = "Online";

        }

        else {

            venue = venueOptions[venueState].name;

        }

        let purchasePrice;  //declaring the purchase price to purchase from

        if (priceRef.current.value === "") {

            purchasePrice = 0.00;

        }

        else {

            purchasePrice = parseFloat(priceRef.current.value);

        }


        try {       //try with a catch for error handeling the adding towasrds the databse

            let data = {

                sessionDate: date,

                price: purchasePrice,

                module: moduleRef.current.value,

                location: venue,

                photoURL: file,

                tutor: currentUser.displayName

            }

            await addDoc(allSessions, data).then(

                function (docRef) {

                    const data = {};

                    const qUserSessions = collection(users, currentUser.uid, "sessions");

                    setDoc(doc(qUserSessions, docRef.id), data);
                    alert("You have successfully created a session");
                }

            );

        }

        catch (error) {

            setError(error.code);

            setLoading(false);

        }


        setLoading(false);

    }

    const venuehtml = (

        <div className="venuedropdown">

            <select value={venueState} onChange={handlevenueChange}>

                {venueOptions.map((venue) => (

                    <option value={venue.value}>{venue.name}</option>

                ))}

            </select>

        </div>

    )

    //For date 

    const [date, setDate] = useState();

    //console.log("Date", date); 

    return (

        <div>

            <SideBar />

            <div className="marginPage">

                <h1 className='pageHeading'>Create your own study session</h1>

                <div className="login-register-back">

                    <div>

                        <h3 className="heading2CreateSession" style={{ 'font-size': '1.25em', 'font-weight': '100', 'color': 'rgb(102, 4, 37)' ,'marginTop': '0' }}> Please choose a display picture to display with your session details in the marketplace.</h3>

                        <img className="dot" alt="session" id='sessionImg' src={tempImage} />

                        <br></br>

                        <label htmlFor="fileUpload" className="signIn" style={{'marginLeft':'40%', 'marginRight': '40%'}}>Select Image</label>

                        <input type='file' accept='image/*' id='fileUpload' onChange={imageUpload} style={{ 'visibility': 'hidden', 'text-align': 'left' }} />

                    </div>

                    <h3 className="heading2CreateSession" style={{ 'font-size': '1.25em', 'font-weight': '100', 'color': 'rgb(102, 4, 37)' }}> Will the session be hosted online?</h3>

                    <div className="tickbox"><input type="checkbox" checked={isOnline} onChange={handleChange} />Online</div>

                    {!isOnline ? venuehtml : ''}

                    <h1 className="heading2CreateSession" style={{ 'font-size': '1.25em', 'font-weight': '100', 'color': 'rgb(102, 4, 37)' }}>Session date and time: {date} </h1>


                    <form onSubmit={handleSubmit}>

                        <input type="datetime-local" onChange={handleDate} required className='textInput' style={{'width': '40%'}} />


                        <br></br>

                        <h1 className="heading2CreateSession" style={{ 'font-size': '1.25em', 'font-weight': '100', 'color': 'rgb(102, 4, 37)' }}>Price: {date} </h1>


                        <CurrencyInput

                            id="price"

                            placeholder="R0.00"

                            allowDecimals={true}

                            decimalsLimit={2}

                            ref={priceRef}

                            autoComplete='off'

                            className='textInput'

                        />

                        <h1 className="heading2CreateSession" style={{ 'font-size': '1.25em', 'font-weight': '100', 'color': 'rgb(102, 4, 37)' }}>Module: {date} </h1>

                        <label htmlFor="moduleInput"></label>

                        <input type='text' ref={moduleRef} required autoComplete="off" placeholder="Module" id="moduleInput" className='textInput' />

                        <div

                        ><button style={{ 'margin-left': '-2mm' }}

                            className="purchase" disabled={loading} type='submit'>Submit session</button></div>

                    </form>

                    <p className="errorMessage" aria-live="assertive">{error}</p>

                </div>

            </div>

            {/* price div and image upload div */}
            <div className='waveContainer' style={{ 'bottom': '-40vh' }}>
                    <div className='wave'></div>
                </div>
        </div>

    )

}

