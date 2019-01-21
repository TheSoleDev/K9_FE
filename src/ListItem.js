import React, { Component } from 'react';


class ListItem extends Component {

  render() {
  	  const metaData = this.props.comic;
  	  const {thumnail, issueNumber, pageCount, dates, prices} = metaData;
      return (
        <div className="App">


        </div>
      );

  }
}

export default App;
