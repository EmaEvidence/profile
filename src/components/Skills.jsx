import React, { Component } from 'react';
import Skill from './Skill';
import { skills } from '../assets/skills';

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills
    };
    this.loadSkills = this.loadSkills.bind(this);
  }

  loadSkills() {
    const { skills } = this.state;
    return skills.map((skill, index) => {
      return (<Skill key={`${skill}${index}`} skill={skill} />);
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="text skills">
          {
            this.loadSkills()
          }
        </div>
      </div>
    );
  }
}

export default Skills;
