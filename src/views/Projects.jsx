import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import projects from '../projects.json';
import {CardDeck, Card, CardTitle, CardBody, Button, Badge} from 'reactstrap';

class Projects extends React.Component{
  componentDidMount(){
    document.title = 'Projects | Isaac\'s website';
  }
  render(){
    return(
      <Fragment>
        <CardDeck>
          {projects.map((project, i) => (
            <Card key={i}>
              <CardBody>
                <CardTitle className="h3">
                  {project.title}
                </CardTitle>
              </CardBody>
                <img width="100%" src={project.thumbnail} alt={project.title}/>
              <CardBody>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
              <Link className="btn btn-primary" to={`/projects/${i}`}>See project</Link>
            </CardBody>
          </Card>
          ))}
        </CardDeck>
    </Fragment>
    )
  }
}

export default Projects;
