import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ema from '../assets/ema.png';
import grid from '../assets/grid.png';
import carousel from '../assets/crousel.png'
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
      displayType: 'grid'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderFloaters = this.renderFloaters.bind(this);
    this.tooggleDisplay = this.tooggleDisplay.bind(this);
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

  tooggleDisplay(displayType) {
    this.setState({
      displayType
    });
  }

  render() {
    const { pathname } = this.props.location;
    const displayMenu = (this.state.menuState) ? 'block' : 'none';
    const { displayType } = this.state;
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
          {
            (pathname === '/projects' || pathname === '/skills') && 
              (
                <span className="switch" style={{ display: 'flex', position: 'absolute', top: 10, right: 10, color: '#fff', justifyContent: 'space-around', alignItems: 'center' }}>
                  Change display type
                  <img
                    src={grid}
                    alt="grid"
                    style={{ width: '20px', height: '20px', margin: '0 5px', opacity: (displayType === 'grid') ? 1 : 0.5 }}
                    onClick={() => {this.tooggleDisplay('grid')}}
                  />
                  <img
                    src={carousel}
                    alt="carousel"
                    style={{ width: '30px', height: '20px', margin: '0 5px', opacity: (displayType === 'carousel') ? 1 : 0.5 }}
                    onClick={() => {this.tooggleDisplay('carousel')}}
                  />
                </span>
              )
          }
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/connect" exact component={Connect} />
            <Route path="/links" exact component={Links} />
            <Route path="/mentorship" exact component={Mentorship} />
            <Route
              path="/projects"
              exact
              render={(props) => <Projects {...props} displayType={displayType} />}
            />
            <Route
              path="/skills"
              exact
              render={(props) => <Skills {...props} displayType={displayType} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Index);
