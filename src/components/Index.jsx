import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ema from '../assets/ema.png';
import Profile from './Profile';
import Blogs from './Blogs';
import Links from './Links';
import Connect from './Connect';
import Mentorship from './Mentorship';
import Projects from './Projects';
import Skills from './Skills';
import Menu from './Menu';
import Floater from './Floater';
import { skills } from '../assets/skills';
import { uniqueNumber } from '../utils/uniqueNumber';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderFloaters = this.renderFloaters.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        menuState: false
      });
    });
  }

  toggleMenu() {
    this.setState({
      menuState: !this.state.menuState
    });
  }

  closeMenu() {
    this.setState({
      menuState: false
    });
  }

  renderFloaters() {
    return skills.map((skill, index) => {
      const start = uniqueNumber(skills.length);
      return <Floater key={skill.name} title={skill.name} index={index} start={start} />
    });
  }

  render() {
    const displayMenu = (this.state.menuState) ? 'block' : 'none';
    return (
      <div className="container">
        <div className="left">
          {
            (window.innerWidth > 768) && this.renderFloaters()
          }
          <div className="image">
            <img src={ema} alt="" />
            <div className="name">
              <span className="handle">ea</span>
              <span className="title">Fullstack Software Engineer</span>
              <span className="tagline"><i>making products Users love</i></span>
            </div>
          </div>
          <div className="name">
            <span className="handle">ea</span>
            <span className="title">Fullstack Software Engineer</span>
            <span className="tagline"><i>making products Users love</i></span>
          </div>
          <hr />
          <div className="links">
            <Menu {...this.props} />
          </div>
          <div className="hamburg" onClick={this.toggleMenu}>
            {
              (displayMenu === 'none') ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>
            }
          </div>
          <div className="mobile-links" onMouseLeave={this.closeMenu} style={{ display: displayMenu }}>
            <Menu {...this.props} />
          </div>
        </div>
        <div className="right">
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/connect" exact component={Connect} />
            <Route path="/links" exact component={Links} />
            <Route path="/mentorship" exact component={Mentorship} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/skills" exact component={Skills} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Index);
