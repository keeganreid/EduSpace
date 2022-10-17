
import React from "react";
import AddUser from "./components/addUser";
import SideBar from "./components/SideBar";
import Pages from "./pages/Pages";
import { AuthProvider } from './contexts/auth-context';
import './index.css';


/*
 function App() {
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
      <Pages/>
      </AuthProvider>
    </div>
  );
}


export default App;
