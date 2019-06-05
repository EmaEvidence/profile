import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.loadTech = this.loadTech.bind(this);
  }

  showOverlay() {
    this.setState({
      display: 'flex'
    });
  }

  hideOverlay() {
    this.setState({
      display: 'none'
    });
  }

  loadTech(techs) {
    const result = techs.map((tech) => {
      return <span key={tech} className="tech-stack">{tech}</span>
    })
    return result;
  }

  render() {
    const { project, isCarousel } = this.props;
    // const 
    let { display } = this.state;
    return (
      <div
        className="skill"
        onMouseOver={this.showOverlay}
        onMouseLeave={this.hideOverlay}
      >
        <div className="overlay animate-skill" style={{ display }} >
          <span className="proficiency tech-container">
            <span className="techs">
              {
                this.loadTech(project.technologies)
              }
            </span>
          </span>
          <span className="experience url">
            <span className="value">
              <a href={project.url} target="new">
                {project.url}
              </a>
            </span>
          </span>
          <span className="experience url">
            <span className="value">
              <a href={project.repo} target="new">
                {project.repo}
              </a>
            </span>
          </span>
        </div>
        <h1 className="project-logo">
          {
            project.name[0].toUpperCase()
          }
        </h1>
        <div className="details">
          <span>{project.name}</span>
        </div>
      </div>
    );
  }
};

export default Project;
