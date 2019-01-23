import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import List from '../List';
import {PostData} from '../services/PostData';
import ComicsData from '../ComicsData';

class HeroList extends Component {
  constructor(props){
      super(props);
      this.state = {
          selected: [],
          userData: null,
          isLoggedIn: false
      }
      this.logout = this.logout.bind(this);
      this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillMount(props){
      if(sessionStorage.getItem('userData')){
        this.setState({
                      userData: JSON.parse(sessionStorage.getItem('userData')),
                      isLoggedIn: true
        });
      }
  }
  logout(){
    sessionStorage.setItem('userData','');
    sessionStorage.clear();
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index)
    });
  }
  
  render() {
    return (
        
      <div>
        <Header  />      
        <div className="container">
        	<div className="row">
        		<div className="col">

                <p>{this.state.selected.length}</p>
                <div className="store-container">
                    <h1>All Comics</h1>
                    <List result={ComicsData().data.results} onSelect={this.handleSelection} />
                </div>



        		</div>
        	</div>	
        </div>
      </div>
    );
  }
}

export default HeroList;
