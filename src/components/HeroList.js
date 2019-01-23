import React, { Component } from 'react';

import Header from './Header';
import List from '../List';
import {PostData} from '../services/PostData';
import HeroComicSeries from './HeroComicSeries';

class HeroList extends Component {
  constructor(props){
      super(props);
      this.state = {
          userData: null,
          isLoggedIn: false,
          isLoaded: false,
          characterItems:[],
          selectedChar:null
      }

  }

  componentWillMount(props){
      if(sessionStorage.getItem('userData')){
        this.setState({
                      userData: JSON.parse(sessionStorage.getItem('userData')),
                      isLoggedIn: true
        });
      }
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/users/getcharacters",{
        method: 'POST',
          headers: new Headers({
            "Content-Type": "application/json"
          })
      })
     .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            characterItems: json,
        })
    })
          .catch((error) => {
        console.log(error);
      })

  }

  selectCharacter(charId){
        this.setState({
            selectedChar: charId,
        })
  }

  render() {


    const metaData = this.state;
    const { isLoaded, characterItems } = metaData;

    if(this.state.selectedChar != null){
      return (
        <HeroComicSeries currentCharId={this.state.selectedChar} />
      )
    }

    if(!isLoaded){
        return <div>Loading..</div>
    }
    else{
      return (
       
        <div>
          <Header  />      
          <div className="container">
          	<div className="row">
          		
                  <div className="col">
                    <h1>Select Charcater</h1>
                  </div>
              </div>
              <div className="row">    
                    {characterItems.characters.map(item => (
                      <div className="col center" key={item.id}>
                       
                          <img className="img-thumbnail" src={`${item.char_thumbnail}`} />

                          <p><strong>{item.char_name}</strong></p>
                        <button className="btn btn-primary" onClick={() => this.selectCharacter(item.char_id)}>View Comic Series</button>
                      </div>
                    ))}
      


          	
          	</div>	
          </div>
        </div>
      );
    }
  }
}

export default HeroList;
