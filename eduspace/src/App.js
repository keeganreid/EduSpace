
import React from "react";
import AddUser from "./components/addUser";
import SideBar from "./components/SideBar";
import Pages from "./pages/Pages";
import { AuthProvider } from './contexts/auth-context';


/* function App() {
  return (
    <div className="App">
      <SideBar/>
      <Pages/>
    </div>
  );
}

*/

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <SideBar/>
      </AuthProvider>
    </div>
  );
}


export default App;
