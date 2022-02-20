// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import FormTextArea from './Components/FormTextArea';
import About from './Components/About';
import Alert from './Components/Alert';


function App() {
  //using logic to change color-mode of application
  const [mode, setMode] = useState('light'); //we will control mode of App from App.js
  //creating state to manage Alert for different situations
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      alertMessage: message,
      alertType: type
    })
    setTimeout(() => { //setting time after alert disapears from ui
      setAlert(null);;
    }, 1500);
  }

  const toggleMode = () => { //using in NavBar
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#524c6b'; //syntax to apply css to html elements
      showAlert("Dark Mode has been Enabled", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Enabled", "success");

    }
  }
  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode} title="TextUtils" terms="Terms of Use" about="About" contact="Contact" services="Text" />
      {/* <NavBar price="Prices" contact="Contact" services="Services" />  to check default Proptypes behavior*/}
      <Alert alert={alert} />
      <div className='container mt-3 '>
        <FormTextArea mode={mode} showAlert={showAlert} />
        <About />
      </div>
    </div >
  );
}

export default App;
