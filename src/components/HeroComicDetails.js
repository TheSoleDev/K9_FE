import React, { Component } from 'react';

import Header from './Header';
import List from '../List';
import {PostData} from '../services/PostData';
import HeroComicSeries from './HeroComicSeries';

class HeroComicDetails extends Component {
  constructor(props){
      super(props);
      this.state = {
          userData: null,
          isLoggedIn: false,
          isLoaded: false,
          characterComics:[],
          selectedComic:null,
          redirectToSeries:false
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
    fetch("https://gateway.marvel.com:443/v1/public/comics/"+this.props.currentComicId+"?apikey=ec74d15afc6774090a36f84ebe6d73eb&hash=039b86042f3c054f73c92b1e405821b7&ts=12345",{
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

  }
  selectComic(comicId){
        this.setState({
            selectedComic: true,
        })
  }

  backToSeriesList(comicId){
        this.setState({
            redirectToSeries: comicId,
        })
  }
  

  render() {
      const metaData = this.state;
      const { isLoaded, characterComics,redirectToSeries } = metaData;

    if(this.state.redirectToSeries){
      return (
        <HeroComicSeries currentCharId={this.props.currentCharId} />
      )
    }

    if(!isLoaded){
        return <div>Loading..</div>
    }
    else{

      console.log(characterComics.data.results);
        return (
          <div>
            <Header  />  

            <div className="container">
                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary" onClick={() => this.backToSeriesList(this.props.currentCharId)}>Back to Previous List</button>
                  </div>
                </div>              
                      {characterComics.data.results.map(item => (
                        <div className="row" key={item.id}>
                          <div className="col-4 center comic-item">
                           
                              <img className="img-thumbnail" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />

                              <p><strong>{item.title}</strong></p>
                          </div>
                          <div className="col-8">
                              <div className="comic-data-container">
                                <h2>{item.title}</h2>
                                <p>Issue: {item.issueNumber}</p>
                                <p>Pages: {item.pageCount}</p>
                                <p>Date: {new Date(item.dates[0].date).toLocaleDateString()}</p>
                                <p>Price: ${item.prices[0].price}</p>
                              </div>                        
                          </div>
                        </div>
                      ))}
        
                
            </div>
          </div>
        );
      }


   
  }
}

export default HeroComicDetails;
