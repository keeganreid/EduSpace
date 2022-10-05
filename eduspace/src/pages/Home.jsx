import React from 'react'
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <><div><h1>EduSpace</h1>
      </div>
      {/* <input id="textfield" name="textfield" type="text" placeholder="Company/Sponsor" />
    <p></p>
    <input id="textfield" name="textfield" type="text" placeholder="Email" />
    <p></p>
    <input id="textfield" name="textfield" type="text" placeholder="Password" />
    <p></p> */}
    <NavLink to='/Login' ><button>Login</button></NavLink>
    <p></p>

    <button>Sing Up</button>
    </>
  )
}

export default Home

