import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import {PostData} from '../services/PostData';


class Register extends Component {

	constructor(props){
	    super(props);
	    let userData = null;

	    if(JSON.parse(sessionStorage.getItem('userData'))){
	      userData = JSON.parse(sessionStorage.getItem('userData'));
	    }   

	    this.state = {
	        username:'',
	        email:'',
	        password:'',
	        cpassword:'',
	        redirect: false,
	        isLogged: false,
	        userData: userData
	    }
	    this.register = this.register.bind(this);
	    this.onChange = this.onChange.bind(this);
	}

	register(){

		if(this.state.username && this.state.password && this.state.email){
		  PostData('users/register', this.state).then((result) => {
		    let responseJSON = result;
		    if(responseJSON.success){
		      alert('Thank you for registering. You can now login to your account.');
		      this.setState({redirect: true});
		    }
		    else{
		      console.log('ERROR');
		    }

		  });
		}
	}


	onChange(e){
		this.setState({[e.target.name]: e.target.value});
		console.log(this.state)
	}

  render() {
    if(this.state.userData !== null && typeof this.state.userData !== "undefined"){
      return (<Redirect to={'/herolist'}/>);
    }
    if(this.state.redirect){
      return (<Redirect to={'/login'}/>);
    }
    return (
        
	    <div>
	        <Header  />      
	        <div className="container">    	
			      <div className="row justify-content-center">
			        <div className="col-4 align-self-center">


				        <div className="login_form_container">
				          <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
				          <div className="form-group">
					          <label className="sr-only">Username</label>
					          <input type="text" id="username" name="username" className="form-control" placeholder="Username" required  onChange={this.onChange} />
				          </div>
				          <div className="form-group">
					          <label className="sr-only">Email</label>
					          <input type="email" id="email" name="email" className="form-control" placeholder="Email Address" required  onChange={this.onChange} />
				          </div>	          
				          <div className="form-group">	          
					          <label className="sr-only">Password</label>
					          <input type="password" id="password" name="password" className="form-control" placeholder="Password" required  onChange={this.onChange} />
				          </div>
				          <div className="form-group">	          
					          <label className="sr-only">Confirm Password</label>
					          <input type="password"  id="cpassword" name="cpassword" className="form-control" placeholder="Confirm Password" required  onChange={this.onChange} />
				          </div>
				          <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.register}>Submit</button><br />

				        </div>

			        </div>
			      </div>
			</div>
		</div>
    );
  }
}

export default Register;
