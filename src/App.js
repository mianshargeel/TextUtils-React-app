// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import FormTextArea from './Components/FormTextArea';
import About from './Components/About';

function App() {
  return (
    <div className="App bg-secondary ">
      <NavBar title="TextUtils" terms="Terms of Use" about="About" contact="Contact" services="Text" />
      {/* <NavBar price="Prices" contact="Contact" services="Services" />  to check default Proptypes behavior*/}
      <div className='container mt-3 '>
        <FormTextArea />
        <About />
      </div>
    </div >
  );
}

export default App;
