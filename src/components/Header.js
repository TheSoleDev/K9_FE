import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">K9 Marvel</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse justify-content-end" id="navbarText">

				<ul className="navbar-nav">
	                <li className="nav-item">
	                    <a className="nav-link" href="/login">Login</a>
	                </li>
	                <li className="nav-item">
	                    <a className="nav-link" href="/register">Register</a>
	                </li>
	            </ul>
			  </div>
			</nav>
		
    );
  }
}

export default Header;


