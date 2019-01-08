import React, { Component } from 'react';
import ema from '../assets/ema.png';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
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
          <span className="proficiency">
            <span className="title">Proficiency: &nbsp;</span>
            <span className="value">{skill.level}</span>
          </span>
          <span className="experience">
            <span className="title">Years of Experience: </span>
            <span className="value">{skill.experience}</span>
          </span>
          <span className="projects">
            <span className="title">Completed Projects: </span>
            <span className="value">{skill.projects}</span>
          </span>
        </div>
        <div className="img">
          <img src={skill.src || ema} alt={skill.name}  />
        </div>
        <div className="details">
          <span>{skill.name}</span>
        </div>
      </div>
    );
  }
};

export default Skill;
