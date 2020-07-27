import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      bio: '',
      defaultBio: 'Welcome, you can call me Evidence. I am a Full stack Software Engineer with more than 4 years of professional experience providing full stack optimised web solutions using Javascript(MERN Stack), I am also fluent in PHP, Python(Flask) & Dart(Flutter). I am open to opportunities as an individual contributor in an engineering team as I hone my skills towards team leadership. If I am not coding, I am surfing the internet for Innovative Ideas or building one, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I pass down what I have learnt over time through direct mentorship. \n Master the logic, for languages are tools'
    };
    this.writeBio = this.writeBio.bind(this);
  }

  componentDidMount() {
    const lastDisplayed = window.localStorage.getItem('displayed');
    if ((Date.now() - lastDisplayed) > 86400000 || lastDisplayed === null) {
      this.writeBio();
      window.localStorage.setItem('displayed', Date.now())
    } else {
      this.setState({
        bio: this.state.defaultBio
      });
    }
  }

  writeBio() {
    const { defaultBio } = this.state;
    let count = 0;
    const write = setInterval(() => {
      let bio = this.state.bio;
      bio += defaultBio[count];
      if (!defaultBio[count]) {
        return clearInterval(write);
      }
      this.setState({
        bio
      });
      count += 1;
    }, 100)
  }

  render() {
    return (
      <div className="profile">
        <div className="text">
          {this.state.bio}
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
