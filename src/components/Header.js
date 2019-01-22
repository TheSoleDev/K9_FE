import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		  <h5 className="my-0 mr-md-auto font-weight-normal">K9 Marvel</h5>

		  <a className="btn btn-primary" href="#">Sign In</a> 
		  <a className="btn btn-outline-primary" href="#">Sign up</a>
		</div>
    );
  }
}

export default Header;


