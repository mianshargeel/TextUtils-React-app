// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import FormTextArea from './Components/FormTextArea';
import About from './Components/About';


function App() {
  //using logic to change color-mode of application
  const [mode, setMode] = useState('light'); //we will control mode of App from App.js
  // const [modeText, setModeText] = useState('Enable Dark Mode');
  const toggleMode = () => { //using in NavBar
    if (mode === 'light') {
      setMode('dark');
      // setModeText('Enable Light Mode');
      document.body.style.backgroundColor = '#524c6b'; //syntax to apply css to html elements

    } else {
      setMode('light');
      // setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode} title="TextUtils" terms="Terms of Use" about="About" contact="Contact" services="Text" />
      {/* <NavBar price="Prices" contact="Contact" services="Services" />  to check default Proptypes behavior*/}
      <div className='container mt-3 '>
        <FormTextArea mode={mode} />
        <About />
      </div>
    </div >
  );
}

export default App;
