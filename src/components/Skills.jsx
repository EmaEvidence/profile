import React, { Component } from 'react';
import Skill from './Skill';
import { skills } from '../assets/skills';
import Carousel from './Carousel';

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
    const { displayType } = this.props;
    return (
      <div className="profile">
        {
          (displayType === 'grid') ? (
            <div className="text skills">
              {
                this.loadSkills()
              }
            </div>
          ) : (
            <Carousel data={skills} type={'skill'} />
          )
        }
      </div>
    );
  }
}

export default Skills;
