import React, { Component } from 'react';
import './App.scss';
import List from './List';

import Routes from './routes/Routes';




class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
          userData: null,
          isLoggedIn: false
    
    };

  }




  // constructor(props){
  //   super(props);
  //   this.state ={
  //       items: [],
  //       isLoaded:false,    
  //   }
  // }

  // componentDidMount(){
  //   fetch("https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=ec74d15afc6774090a36f84ebe6d73eb&hash=039b86042f3c054f73c92b1e405821b7&ts=12345")
  //    .then(res => res.json())
  //   .then(json => {
  //       this.setState({
  //           isLoaded:true,
  //           items: json,
  //       })
  //   })
  // }


  render() {
     // console.log(this.state.items.data.results);
    return (
      <div>
 

          <Routes />

      </div>

    );
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index)
    });
  }

}

export default App;