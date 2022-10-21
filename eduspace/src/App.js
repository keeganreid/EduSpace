
import React from "react";
import Pages from "./pages/Pages";
import { AuthProvider } from './contexts/auth-context';
import './index.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Pages/>
      </AuthProvider>
    </div>
  );
}


export default App;
