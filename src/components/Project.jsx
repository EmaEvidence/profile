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
      return <span className="tech-stack">{tech}</span>
    })
    return result;
  }

  render() {
    const { skill } = this.props;
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
                this.loadTech(skill.technologies)
              }
            </span>
          </span>
          <span className="experience url">
            <span className="value">
              <a href={skill.url} target="new">
                {skill.url}
              </a>
            </span>
          </span>
          <span className="experience url">
            <span className="value">
              <a href={skill.repo} target="new">
                {skill.repo}
              </a>
            </span>
          </span>
          {/* <span className="projects">
            <span className="value">{skill.tagline}</span>
          </span> */}
        </div>
        <h1 className="project-logo">
          {
            skill.name[0].toUpperCase()
          }
        </h1>
        <div className="details">
          <span>{skill.name}</span>
        </div>
      </div>
    );
  }
};

export default Project;
