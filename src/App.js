import React from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [Mode, setMode] = useState('light');
  const modeToggle = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#262e2e';
      showAlert("You have enabled Dark Mode", "success");
    }
    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("You have enabled Light Mode", "success");
    }
  }

  const redMode = () => {
    if (Mode === 'dark') { document.body.style.backgroundColor = '#5a0b0b'; }
  }
  const blueMode = () => {
    if (Mode === 'dark') { document.body.style.backgroundColor = '#14173a'; }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>

      {/* Importing Navbar */}
      
      <Navbar title="TextUtils" mode={Mode} modeToggle={modeToggle} blueMode={blueMode} redMode={redMode} />
      <Alert alert={alert} />
      <TextForm label="email" heading="Enter text here" mode={Mode} showAlert={showAlert}/>
      
          {/* <Route exact path="/about" element={<About mode={Mode} modeToggle={modeToggle}/>}>
          </Route> */}
          {/* <Route exact path="/" element={>
          </Route>
        </Routes>
        </Router> */}
      
      
      {/* <div className="container my-3">  
        <About/>
      </div> */}
    </>

  );
}
export default App;