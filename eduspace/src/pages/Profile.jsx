import React from 'react';
import '../styles/Styles.css';



function Profile() {
  return (

      
    <div id = 'centerwrap'>
       <img src={process.env.PUBLIC_URL + '/logo192.png'}width="200" />
       <p></p>

    Name: <input id="textfield" name="textfield" type="text" placeholder="Enter Name" />
    <p></p>
UserName: <input id="textfield" name="textfield" type="text" placeholder="Username" />
    <p></p>
    Email: <input id="textfield" name="textfield" type="text" placeholder="Email" />
    <p></p> 
    {/*USED TO MAKE A TEXT OX WITH WORDS WRITTEN IN IT*/}
    Bio: <input id="textfield" name="textfield" type="text" placeholder="Bio" />
    <p></p> 
    Degree: <input id="textfield" name="textfield" type="text" placeholder="Degree" />
    <p></p> 
    Faculty: <input id="textfield" name="textfield" type="text" placeholder="Faculty" />
    <p></p> 
    Tutoring Modules: <input id="textfield" name="textfield" type="text" placeholder="Modules tutoring" />
    <p></p> 
    <button className='button2'>Save</button>





    </div>
  )
}

export default Profile