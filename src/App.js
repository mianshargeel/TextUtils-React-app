// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import FormTextArea from './Components/FormTextArea';
import About from './Components/About';
import Alert from './Components/Alert';
import Terms from './Components/Terms';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




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
      document.title = "TextUtils - DarkMode"; //setting title of ui
      //use of setIntervsl to show some instance message user on UI i-e
      setInterval(() => {
        document.title = "TextUtils -This is amaizing DarkMode";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils -Please Install TextUtils App";
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  }
  return (

    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} title="TextUtils" terms="Terms of Use" about="about"
        contact="Contact" services="Text" />
      <Alert alert={alert} />
      <div className='container mt-3 '>
        {/* Before using Switch please check this link
        https://www.codegrepper.com/code-examples/whatever/switch+is+not+exported+from+react-router-dom*/}
        <Switch>
          {/* note if we dont use 'exact' React matching partially, but if we use exact then react matches Exactlly
          i-e /users --> Component1 and users/contact --> Component2 without exact react always rendering to 
          Component1 but not to Component2  */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <FormTextArea mode={mode} showAlert={showAlert} />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;

//----------------------------------------------------------Copy of App.js with updated toggleMode()-----------------------------// 
