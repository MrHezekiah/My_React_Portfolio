import React, {Fragment} from 'react';

class Projects extends React.Component{
  componentDidMount(){
    document.title = 'Projects | Isaac\'s website';
  }

  render(){
    return(
      <Fragment class="container text-muted text-justify mt-5 mb-5">
         <h4 class="projects display-4 mb-5" id="projects">Projects</h4>
         <div class="row px-3">
          <div class="col-md-6 col-lg-3">
           <div class="card">
            <img src="images/js.png" class="card-img-top img-fluid"/>
            <div class="card-block px-3">
             <h3 class="card-title">Javascript</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
             </p>
            </div>
           </div>
        </div>


        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="images/css.png" class="card-img-top img-fluid"/>
            <div class="card-block px-3">
              <h3 class="card-title">Css</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="images/html.png" class="card-img-top img-fluid"/>
            <div class="card-block px-3">
              <h3 class="card-title">Html</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card">
            <img src="images/sass.png" class="card-img-top img-fluid mb-5 pb-3"/>
            <div class="card-block px-3">
              <h3 class="card-title">Sass</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
  }
}
