import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Project from './Project';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          name: 'Alecia',
          technologies: ['Reactjs', 'Redux', 'AWS Lambda', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'shoppable entertainment',
          url: 'https://www.alecia.com',
          repo: 'Third Party App'
        },
        {
          name: 'Dashboards',
          technologies: ['Vuejs', 'Vuex', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Dashboard management system',
          url: 'https://vuedashboad.herokuapp.com/',
          repo: 'Private Repo'
        },
        {
          name: 'PostIt(React)',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine', 'Jest', 'Reactjs', 'Redux', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Whatsapp clone',
          url: 'http://postaa.herokuapp.com/',
          repo: 'https://github.com/EmaEvidence/PostIt'
        },
        {
          name: 'PostIt(Vue)',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine', 'Jest', 'Vuejs', 'Vuex', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Whatsapp clone',
          url: 'https://vuepostit.herokuapp.com',
          repo: 'https://github.com/EmaEvidence/PostIt_Frontend_vuejs'
        },
        {
          name: 'fUpper',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine', 'Jest', 'Reactjs', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Attendance management system',
          url: 'https://fupper.herokuapp.com',
          repo: 'Private Repo'
        },
        {
          name: 'ART',
          technologies: ['Reactjs', 'Redux', 'HTML', 'JavaScript', 'CSS', 'Jest'],
          tagline: 'Asset Manager',
          url: 'Private App',
          repo: 'Third Party App'
        },
        {
          name: 'CALM',
          technologies: ['Reactjs', 'Redux', 'HTML', 'TypeScript', 'CSS', 'SCSS', "Jest"],
          tagline: 'Learning Mapper',
          url: 'Archived',
          repo: 'Third Party App'
        },
        {
          name: 'Resolutionz',
          technologies: ['Meteorjs', 'GraphQL', 'Reactjs', 'Appollo', 'HTML', 'JavaScript', 'CSS', 'MongoDB'],
          tagline: 'Resolution management system',
          url: 'https://resolutionzapp.herokuapp.com/',
          repo: 'https://github.com/EmaEvidence/ApoMetGraReact'
        },
        {
          name: 'Ideabox',
          src: '',
          technologies: ['Nodejs', 'Expressjs', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Idea collection app',
          url: 'https://bc21-ideabox.herokuapp.com/passreset',
          repo: 'https://github.com/EmaEvidence/bc-21-ideabox'
        },
        {
          name: 'SMS Manager API',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine'],
          tagline: 'SMS Management App',
          url: 'Not Hosted',
          repo: 'https://github.com/EmaEvidence/sms_manager'
        },
        {
          name: 'Phone Number Generator',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine', 'Jest', 'Reactjs', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'Phone Number Generator',
          url: 'Not Hosted',
          repo: 'https://github.com/EmaEvidence/pNg'
        },
        {
          name: 'Inverted Index API',
          technologies: ['Nodejs', 'Expressjs', 'ES6', 'Jasmine'],
          tagline: 'Elastic Search implementation',
          url: 'https://indexaa2.herokuapp.com/',
          repo: 'https://github.com/EmaEvidence/inverted-index-api'
        },
        {
          name: 'PSM API',
          technologies: ['Nodejs', 'Postgresql', 'Expressjs', 'Jasmine'],
          tagline: 'Population Manager',
          url: 'Not Hosted',
          repo: 'https://github.com/EmaEvidence/PSM'
        },
        {
          name: 'Edozzier',
          technologies: ['PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS'],
          tagline: 'school management system',
          url: 'https://edozzier.com',
          repo: 'Third Party App'
        },
      ]
    };
    this.loadProjects = this.loadProjects.bind(this);
  }

  loadProjects() {
    const { projects } = this.state;
    return projects.map((project) => {
      return (<Project key={project.name} project={project} />);
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="text skills">
          {
            this.loadProjects()
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Projects);
