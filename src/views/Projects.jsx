import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import projects from '../projects.json';

class Projects extends React.Component{
  componentDidMount(){
    document.title = 'Projects | Isaac\'s website';
  }

  render(){
    return(
      <Fragment>
        <div>
         <h3>Javascript</h3>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua
         </p>
        </div>


        <div>
         <h3>Css</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div>
          <h3>Html</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div>
          <h3>Sass</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua
           </p>
        </div>
    </Fragment>
    )
  }
}

export default Projects;
