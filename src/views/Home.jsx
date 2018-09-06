import React, {Fragment} from 'react';

class Home extends React.Component{
  componentDidMount(){
    document.title = 'Home | Isaac\'s website';
  }

  render(){
    return(
      <Fragment>
        <header class="container-about mb-5" id="home">
         <nav class="nav fixed-top justify-content-end">

          <a class="navbar-brand text-white" href="index.html">
            <img src="images/logo.jpg" width="40" height="40" class="d-inline-block align-top rounded" alt=""/>
            Trafalgar</a>
          <a class="nav-link active text-white" href="#home">Home</a>
          <a class="nav-link text-white" href="#projects">Projects</a>
          <a class="nav-link text-white" href="#about">About</a>
          <a class="nav-link text-white" href="#contact">Contact</a>
         </nav>
        <h1 class="welcome display-3">Welcome</h1>
       </header>
      </Fragment>
    )
  }
}

export default Home;
