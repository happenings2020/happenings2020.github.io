import React from 'react';
import logo from './happeningsLogo.png';

export default function Nav() {
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-fixed-top">
            <img className="navbar-brand img-fluid" src={logo} width="200x" height="auto"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" >
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Link2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Link2</a>
                </li>
                
                </ul>
                
            </div>
            </nav>
         </div>
    )
}