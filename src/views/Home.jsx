import React, {Fragment} from 'react';

class Home extends React.Component{
  componentDidMount(){
    document.title = 'Home | Isaac\'s website';
  }

  render(){
    return(
      <Fragment>
        <h1>Welcome</h1>
      </Fragment>
    )
  }
}

export default Home;
