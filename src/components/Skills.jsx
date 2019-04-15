import React, { Component } from 'react';
import Skill from './Skill';

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills: [
        {
          name: 'javascript',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/JScript_mzwyx2.png',
          projects: 14
        },
        {
          name: 'node',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/images_2_oukptv.png',
          projects: 9
        },
        {
          name: 'expressjs',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/nodejs-expressjs_qfbouv.jpg',
          projects: 9
        },
        {
          name: 'react and Redux',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/react_lkvpq6.png',
          projects: 7
        },
        {
          name: 'Meteor',
          level: 'proficient',
          experience: 2,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546955345/logo-meteor_rp3glq.png',
          projects: 1
        },
        {
          name: 'vuejs with vuex',
          level: 'expert',
          experience: 2,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/1200px-Vue.js_Logo_2.svg_oh7kk7.png',
          projects: 2
        },
        {
          name: 'PHP',
          level: 'proficient',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/php_mlaodn.png',
          projects: 1
        },
        {
          name: 'GraphQL',
          level: 'proficient',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/graphql_j9cpxw.png',
          projects: 1
        },
        {
          name: 'wordpress',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954086/WordPress_blue_logo.svg_rqumx4.png',
          projects: 4
        },
        {
          name: 'TDD',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954086/TDD_ikupjm.png',
          projects: 8
        },
        {
          name: 'Apollo',
          level: 'proficient',
          experience: 1,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954145/apollo_nopumb.svg',
          projects: 1
        },
        {
          name: 'jQuery',
          level: 'proficient',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954084/jquery_hi3cmz.gif',
          projects: 1
        },
        {
          name: 'MySQL',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/MySQL_nyzxwl.png',
          projects: 1
        },
        {
          name: 'Postgresql',
          level: 'expert',
          experience: 3,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546955319/1200px-Postgresql_elephant.svg_l7fhmh.png',
          projects: 3
        },
        {
          name: 'MongoDB',
          level: 'expert',
          experience: 2,
          src: 'https://res.cloudinary.com/damc3mj5u/image/upload/v1546954085/mongodb_kdeg9m.jpg',
          projects: 1
        }
      ]
    };
    this.loadSkills = this.loadSkills.bind(this);
  }

  loadSkills() {
    const { skills } = this.state;
    return skills.map((skill) => {
      return (<Skill skill={skill} />);
    });
  }

  render() {
    return (
      <div className="profile">
        {/* <span className="heading">Skills</span> */}
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
