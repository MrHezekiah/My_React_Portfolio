import React, {Fragment} from 'react';

class NotFound extends React.Component{
  componentDidMount(){
    document.title = 'Not Found | Isaac\'s website';
  }
  render(){
    return(
      <Fragment>
        <h2>404 NOT FOUND</h2>
        <p>Dead End, Bro!</p>
      </Fragment>
    )
  }
}

export default NotFound;
