import React, { Component } from 'react';


class Register extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4 align-self-center">
        <form className="form-signin">

          <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
          <label className="sr-only">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Username" required autofocus />
          <label  className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <label  className="sr-only">Confirm Password</label>
          <input type="password" id="inputPassword2" className="form-control" placeholder="Confirm Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Register;
