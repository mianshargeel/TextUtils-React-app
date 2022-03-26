import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


function NavBar(props) {
    return (<>
        <header>
            {/* Note we are using "react-router-dom" to keep our web page to reload we have to replace <a></a> to <Link></Link>
            and href="" to to="" which we done below  */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/terms">{props.terms}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.services}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Text Analyzer</Link></li>
                                    <li><Link className="dropdown-item" to="/">UperCase</Link></li>
                                    <li><Link className="dropdown-item" to="/">LowerCase</Link></li>
                                    <li><Link className="dropdown-item" to="/">Frequent Words</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Text Formating</Link></li >
                                </ul >
                            </li >
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.about}</Link>
                            </li >
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">{props.contact}</Link>
                            </li >

                        </ul >
                        {/* using check-box to toggle mode, using logic for text-color according to mode */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>

                            <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="myCheck" />
                            <label className="form-check-label  mx-3" htmlFor="myCheck">Enable Dark Mode</label>
                        </div >
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div >
                </div >
            </nav >
        </header >
    </>)
}

export default NavBar;

/*we have imported PropTypes above here we are setting types for our props of Component NavBar
Note if we dont defind defaultProps then we can use isRequired to must use
title(any property which you must want use).
Remember  PropTypes we can use for array, object function etc as required*/
NavBar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    services: PropTypes.string
}
/*You can define default values for your props by assigning to the special defaultProps property:
NavBar.defaultProps = {
    title: 'here will be title of page',
    about: 'information about this app'
};
*/
//--------------------------------Copy of NavBar with multiple color mode----------------------------//
// import React from 'react'
// import PropTypes from 'prop-types'


// function NavBar(props) {
//     return (<>
//         <header>
//             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//                 <div className="container-fluid">
//                     <a className="navbar-brand" to="/">{props.title}</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" to="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" to="/">{props.terms}</a>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle active" to"/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     {props.services}
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a className="dropdown-item" to="/">Text Analyzer</a></li>
//                                     <li><a className="dropdown-item" to="/">UperCase</a></li>
//                                     <li><a className="dropdown-item" to="/">LowerCase</a></li>
//                                     <li><a className="dropdown-item" to="/">Frequent Words</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" to="/">Text Formating</a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" to="/">{props.about}</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" to="/">{props.contact}</a>
//                             </li>

//                         </ul>
//                         <div className="d-flex">
//                             <div className="bg-primary rounded my-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                             <div className="bg-success rounded my-2 mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                             <div className="bg-danger rounded my-2 mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                             <div className="bg-secondary rounded my-2" onClick={() => { props.toggleMode('secondary') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                             <div className="bg-light rounded my-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                             <div className="bg-dark rounded my-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '30px', width: '30px', cursor: 'poiter' }}></div>
//                         </div>
//                                remove button for light or dark mode and just added above
//                         {/* using check-box to toggle mode, using logic for text-color according to mode
//                         <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//                             <input className="form-check-input mx-1" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="myCheck" />
//                             <label className="form-check-label  mx-3" htmlFor="myCheck">Enable Dark Mode</label>*/}
//                         </div>
//                         <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit" >Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     </>)
// }

// export default NavBar;

// /*we have imported PropTypes above here we are setting types for our props of Component NavBar
// Note if we dont defind defaultProps then we can use isRequired to must use
// title(any property which you must want use).
// Remember  PropTypes we can use for array, object function etc as required*/
// NavBar.prototype = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired,
//     services: PropTypes.string
// }
// /*You can define default values for your props by assigning to the special defaultProps property:
// NavBar.defaultProps = {
//     title: 'here will be title of page',
//     about: 'information about this app'
// };
// */
//----------------------------------------------------------Copy of App.js with updated toggleMode()-----------------------------//
// import React, { useState } from 'react';
// import NavBar from './Components/NavBar';
// import FormTextArea from './Components/FormTextArea';
// import About from './Components/About';
// import Alert from './Components/Alert';


// function App() {
//     //using logic to change color-mode of application
//     const [mode, setMode] = useState('light'); //we will control mode of App from App.js
//     //creating state to manage Alert for different situations
//     const [alert, setAlert] = useState(null);

//     let showAlert = (message, type) => {
//         setAlert({
//             alertMessage: message,
//             alertType: type
//         })
//         setTimeout(() => { //setting time after alert disapears from ui
//             setAlert(null);;
//         }, 1500);
//     }
//     // let diffColorMode = (green, grey, lightblue) =>{
//     //   setMode({
//     //     green: green,
//     //     grey: grey,
//     //     lightblue: lightblue
//     //   })
//     // }

//     const removeBodyBgClasses = () => {
//         document.body.classList.remove('light');
//         document.body.classList.remove('dark');
//         document.body.classList.remove('success');
//         document.body.classList.remove('primary');
//         document.body.classList.remove('danger');
//         document.body.classList.remove('secondary');
//     }
//     const toggleMode = (cls) => { //using in NavBar
//         removeBodyBgClasses(); //when user click on toggle button all bg-classes removed then adds only that on which user clicked
//         document.body.classList.add('bg-' + cls);
//         // console.log(cls);
//         if (mode === 'light') {
//             setMode('dark');
//             document.body.style.backgroundColor = '#524c6b'; //syntax to apply css to html elements
//             showAlert("Dark Mode has been Enabled", "success");

//         } else {
//             setMode('light');
//             document.body.style.backgroundColor = 'white';
//             showAlert("Dark Mode has been Enabled", "success");

//         }
//     }
//     return (
//         <div>
//             <NavBar mode={mode} toggleMode={toggleMode} title="TextUtils" terms="Terms of Use" about="About"
//                 contact="Contact" services="Text" />
//             {/* <NavBar price="Prices" contact="Contact" services="Services" />  to check default Proptypes behavior*/}
//             <Alert alert={alert} />
//             <div className='container mt-3 '>
//                 <FormTextArea mode={mode} showAlert={showAlert} />
//                 <About />
//             </div>
//         </div >
//     );
// }

// export default App;
