import React, {Fragment} from 'react';

class Contact extends React.Component{
  componentDidMount(){
    document.title = 'Contact | Isaac\'s website';
  }

  render(){
    return(
      <Fragment>
        <p>
          Contact me at <a href="mailto:giwaisaac@hotmail.com">my email</a>
        </p>
      </Fragment>
    )
  }
}

export default Contact;
