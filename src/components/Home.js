import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import {PostData} from '../services/PostData';
class Home extends Component {

  constructor(props){
    let userData = null;

    if(JSON.parse(sessionStorage.getItem('userData'))){
      userData = JSON.parse(sessionStorage.getItem('userData'));
    }   
       
    super(props);
    this.state = {
        username:'',
        password:'',
        redirect: false,
        isLogged: false,
        userData: userData
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  login(){
    
    if(this.state.username && this.state.password){
      PostData('users/login', this.state).then((result) => {
        let responseJSON = result;
        if(responseJSON.token){
          sessionStorage.setItem('userData', JSON.stringify(responseJSON));
          this.setState({redirect: true});
          this.setState({userData: JSON.parse(sessionStorage.getItem('userData'))});
        }
        else{
          console.log('ERROR');
        }

      });
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    
  }

  render() {



    if(this.state.userData !== null){
      return (<Redirect to={'/herolist'}/>);
    }

    return (
        
      <div>
        <Header  />      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 align-self-center">

              <div className="login_form_container">
          
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                  <label className="sr-only">Username</label>
                  <input type="text" id="username" name="username" className="form-control" placeholder="Username" required onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label  className="sr-only">Password</label>
                  <input type="password" id="password" name="password" className="form-control" placeholder="Password" required onChange={this.onChange}/>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
            </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
