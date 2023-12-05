import React from 'react'
import pic from "../img/logo.jpg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <div className="nav container-fluid">
        <div className="nav-top">
            <h4>SAFETY RECALL</h4>
            <h4>SPARE PARTS</h4>
            <h4>GARIA UTILITY</h4>
            <h4>DEALER PORTAL</h4>
        </div>
        <div className="title">
            <img src={pic} alt="" />
            <br />
            <a className="navbar-brand" href="#">G</a>
            <a className="navbar-brand" href="#">A</a>
            <a className="navbar-brand" href="#">R</a>
            <a className="navbar-brand" href="#">I</a>
            <a className="navbar-brand" href="#">A</a>
        </div>

    </div>

    <nav className="navbar fixed-top navbar-expand-lg">
        <div className='nav-down'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"black"}}>
        <span className="navbar-toggler-icon">
        <span class="line"></span> 
        <span class="line"></span> 
        <span class="line" style={{marginBottom: "0"}}></span>
        </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">BRAND</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">MODEL</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">BESPOKE</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">CONFIGURATOR</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">CARS IN ACTION</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">CONTACT US</a>
            </li>
        </ul>
        </div>
        </div>
    
    </nav>
    </>
  )
}
