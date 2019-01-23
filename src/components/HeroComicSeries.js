import React, { Component } from 'react';

import Header from './Header';
import List from '../List';
import {PostData} from '../services/PostData';
import HeroComicDetails from './HeroComicDetails';

class HeroComicSeries extends Component {
  constructor(props){
      super(props);
      this.state = {
          userData: null,
          user_id: null,
          isLoggedIn: false,
          isLoaded: false,
          characterComics:[],
          readHistory:[],
          selectedComic:null
      }

  }

  componentWillMount(props){
      if(sessionStorage.getItem('userData')){

        this.setState({
                      userData: JSON.parse(sessionStorage.getItem('userData')),
                      isLoggedIn: true,
                      user_id:JSON.parse(sessionStorage.getItem('userData')).user_id
        });

      }

  }
  componentDidMount(){
    fetch("https://gateway.marvel.com:443/v1/public/characters/"+this.props.currentCharId+"/comics?apikey=ec74d15afc6774090a36f84ebe6d73eb&hash=039b86042f3c054f73c92b1e405821b7&ts=12345",{
        method: 'GET',
          headers: new Headers({
            "Content-Type": "application/json"
          })
      })
     .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            characterComics: json,
        })
    })
          .catch((error) => {
        console.log(error);
      })

      fetch("http://127.0.0.1:8000/users/getreadhistory/" + this.state.user_id,{
        method: 'POST',
          headers: new Headers({
            "Content-Type": "application/json"
          })
      })
                      .then(res => res.json())
                      .then(json => {
                          this.setState({
                              readHistory: json,
                          })
                      })                      
                      .catch((error) => {
                                            console.log(error);
                                        })
// console.log(this.state.readHistory,this.state.user_id);
  }

  selectComic(comicId){
    let user_id = this.state.user_id;
      fetch("http://127.0.0.1:8000/users/updateview/" + user_id + '/' + comicId,{
        method: 'POST',
          headers: new Headers({
            "Content-Type": "application/json"
          })
      })
                      .then(res => res.json())
                      .catch((error) => {
                                            console.log(error);
                                        })

        this.setState({
            selectedComic: comicId,
        })
  }

  checkIfComicAlreadyRead(comicId){
      const metaData = this.state;
      const { readHistory } = metaData;

      console.log(readHistory.readhistory,comicId);

      let history = readHistory.readhistory;
      for(var i = 0 ; i< history.length; i++)
      {     
 
          if(history[i].comic_id== comicId){
             
             return true;

          }
      }      
     
  }

  render() {
      const metaData = this.state;
      const { isLoaded, characterComics, readHistory } = metaData;

    if(this.state.selectedComic != null){
      return (
        <HeroComicDetails currentComicId={this.state.selectedComic}  currentCharId={this.props.currentCharId} />
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
                  <a href="/herolist" className="btn btn-primary">Back to Character List</a><br />
                </div>
              </div>
              <div className="row">

                      {characterComics.data.results.map(item => (
                        <div className="col-3 center comic-item" key={item.id}>
                          {!this.checkIfComicAlreadyRead(item.id)?<div className="tag">New</div>:<div></div>}
                                                   
                            <img className="img-thumbnail" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />

                            <p><strong>{item.title}</strong></p>
                          <button className="btn btn-primary" onClick={() => this.selectComic(item.id)}>View Comic Details</button>
                        </div>
                      ))}
        
              </div>  
            </div>
          </div>
        );
      }


   
  }
}

export default HeroComicSeries;
