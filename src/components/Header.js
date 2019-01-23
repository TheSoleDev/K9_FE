import React, { Component } from 'react';


class Header extends Component {

	constructor(props){
	    super(props);
	    let userData = null;

	    if(JSON.parse(sessionStorage.getItem('userData'))){
	      userData = JSON.parse(sessionStorage.getItem('userData'));
	    }   

	    this.state = {
	        userData: this.userData,
	        isLoggedIn: false
	    }
	    this.logout = this.logout.bind(this);
	    this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
	}

	componentWillMount(props){
	    if(sessionStorage.getItem('userData')){
		    this.setState({
							        userData: JSON.parse(sessionStorage.getItem('userData')),
							        isLoggedIn: true
		    });
	    }
	}

	checkIfLoggedIn(props){
        if(this.state.userData !== null && typeof this.state.userData !== "undefined"){
			return(
					<ul className="navbar-nav">
		                <li className="nav-item">
							<a className="nav-link" href="/" onClick={this.logout} >Logout</a>	                    
		                </li>
		            </ul>
		        );

		}
		else{
			return(
					<ul className="navbar-nav">
		                <li className="nav-item">
							<a className="nav-link" href="/">Login</a>		                    
		                </li>
		                <li className="nav-item">
		                    <a className="nav-link" href="/register">Register</a>
		                </li>
		            </ul>
		        );

		}

	}

	logout(){
		sessionStorage.setItem('userData','');
		sessionStorage.clear();
	}

	render(){
	    return (
				<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
				  <a className="navbar-brand" href="/">K9 Marvel</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse justify-content-end" id="navbarText">
				  {this.checkIfLoggedIn()}

				  </div>
				</nav>
	    );

	}

}

export default Header;


