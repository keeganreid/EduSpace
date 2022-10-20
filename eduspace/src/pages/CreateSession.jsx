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
        //isOnline state
        // venueState state 
        // move these 2 states into database
        // const sessioninfo = {venue:venueState, isOnline: isOnline, date: {day: bla, month: bla,time:bla }} example code
        //setContext(__, sessioninfo)
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

        let purchasePrice;
        if (priceRef.current.value === ""){
            purchasePrice = 0.00;
        }
        else{
            purchasePrice = parseFloat(priceRef.current.value);
        }

        try {
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
            <div className="heading"> <h1>Create your own study session</h1></div>
            <div>
                <img className="dot" alt="session" id='sessionImg' src={tempImage} />
                <br></br>
                <label htmlFor="fileUpload">Select Image</label>
                <input type='file' accept='image/*' id='fileUpload' onChange={imageUpload} style={{ 'visibility': 'hidden' }} />
            </div>
            <div className="tickbox"><input type="checkbox" checked={isOnline} onChange={handleChange} />Online</div>
            {!isOnline ? venuehtml : ''}

            <h1>Selected Date: {date} </h1>

            <form onSubmit={handleSubmit}>
            <input type="datetime-local" onChange={handleDate} required />

            <br></br>


                <CurrencyInput
                    id="price"
                    placeholder="0.00"
                    allowDecimals={true}
                    decimalsLimit={2}
                    ref={priceRef}
                    autoComplete='off'
                />

                <label htmlFor="moduleInput">Module</label>
                <br></br>

                <input type='text' ref={moduleRef} required autoComplete="off" placeholder="Module" id="moduleInput" />
                <br></br>

                <div className="submitbutton"><button disabled={loading} type='submit'>submit session</button></div>
            </form>
            <p className="errorMessage" aria-live="assertive">{error}</p>


            {/* price div and image upload div */}
        </div>
    )
} 