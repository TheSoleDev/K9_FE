import React, { Component } from 'react';
import Registration from './components/Registration';
import ComicData from './ComicData';

const comic = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "42eb46c36701cf30c2844edb510d6c384b1da365",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 68151,
        "digitalId": 0,
        "title": "Deadpool (2018) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": null,
        "modified": "2018-09-28T13:56:28-0400",
        "isbn": "",
        "upc": "75960609035800511",
        "diamondCode": "AUG181040",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/68151",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/68151/deadpool_2018_5?utm_campaign=apiRef&utm_source=ec74d15afc6774090a36f84ebe6d73eb"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-5/digital-comic/49458?utm_campaign=apiRef&utm_source=ec74d15afc6774090a36f84ebe6d73eb"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/24294",
          "name": "Deadpool (2018 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-10-03T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2018-09-10T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/5bae6b604b136",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/5bae6b604b136",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68151/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12298",
              "name": "Scott Hepburn",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12996",
              "name": "Ian Herring",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
              "name": "Nic Klein",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
              "name": "Jacob Thomas",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
              "name": "Skottie Young",
              "role": "writer"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68151/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68151/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/148381",
              "name": "cover from Deadpool (2018) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/148382",
              "name": "story from Deadpool (2018) #5",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68151/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
};

class App extends Component {

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
  //     console.log(json);
  //       this.setState({
  //           isLoaded:true,
  //           items: json,
  //       })
  //   })
  // }

  render() {

      const {thumbnail} = comic.data.results[0];
      return (
        <div className="App">

          <div className="container">
           <div className="row">
            <div className="col">
              <h1>{comic.data.results[0].title}</h1>
              <img src={`${thumbnail.path}.${thumbnail.extension}`} />
            </div>
          </div>
        </div>


        </div>
      );
   
  }
}

export default App;
