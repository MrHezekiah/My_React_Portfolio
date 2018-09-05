import React, { Fragment } from 'react';

class About extends React.Component{
  componentDidMount(){
    document.title = 'About | Isaac\'s website';
  }

  render(){
    return(
      <Fragment class="container text-justify bg-dark text-white my-5 profile">
        <div class="row">
          <div class="col-md-6 card bg-info bg-transparent my-3">
            <h4>Profile</h4>
            <p id="about">With an analytic and information systems educational background,
               I am acquainted with statistical analysis and theoretical findings,
               as well as critical awareness of the role of technology in today's
               dynamic world of innovation. My passion for technology can be traced
               back to my undergraduate years when I became fully aware of its
               undeniable role in driving economic growth and abating some of the
               serious challenges we face as a world today, such as global warming.
               I am driven by a strong motivation to acquire the latest knowledge,
               skills and expertise of the most useful technologies, and have since
               enrolled on the Microsoft Professional Programme in Data Science to
               enrich my knowledge of Data Science and Machine Learning.
             </p>
              <h4>Interests</h4>
              <ul>
                <li>Galaxy</li>
                <li>Nature</li>
                <li>Community</li>
                <li>Knowledge</li>
                <li>Travel</li>
              </ul>
          </div>

          <div class="col-md-6 card bg-info bg-transparent my-3">
            <h4>Education & Employment</h4>
              <ul>
                <li>2004 - 2008: Manchester Metropolitan University (Bsc. Business Economics)</li>
                <li>2010 - 2016: The University of Salford (Pgd Information Systems Management)</li>
                <li>2004 - 2007: Manchester United Football Club</li>
                <li>2010 - 2016: The National Health Service</li>
              </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default About;
