import React from 'react';
import logo from '../Components/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark pt-0 pb-0">
        <div className="container">
            <a className="navbar-brand pt-0 pb-0" href="#;"><img src={logo} className="logo" alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} inverse />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">about me</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">services</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">how work </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">portfolio</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#;">contacts </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;