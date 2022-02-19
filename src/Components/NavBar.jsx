import React from 'react'
import PropTypes from 'prop-types'


function NavBar(props) {
    return (<>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">{props.terms}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.services}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Text Analyzer</a></li>
                                    <li><a className="dropdown-item" href="/">UperCase</a></li>
                                    <li><a className="dropdown-item" href="/">LowerCase</a></li>
                                    <li><a className="dropdown-item" href="/">Frequent Words</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Text Formating</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">{props.contact}</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
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