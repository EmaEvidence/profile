import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      bio: '',
      defaultBio: 'Welcome, I am Emmanuel Alabi. You can call me ea. I am a fullstack Solution Provider(Software Engineer) with years of experience providing full stack web Solutions using Javascript and Nodejs. I follow TDD principles while programming and ensure that my code is properly optimised. I have a good eye for design and I can convert a design/mockup into an application. I am open to new ideas and a quick learner. I am a team player with great stakeholder management skills. If I am not coding, I am surfing the internet for Innovative Ideas, spending time with family, drawing or watching Sci Fi movies at play speed of 2. I also like passing down what I have learnt over time through direct mentorship. Master the logic, for languages are tools'
    };
    this.writeBio = this.writeBio.bind(this);
  }

  componentDidMount() {
    this.writeBio();
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
        <span className="heading">Projects</span>
        <div className="text">
          {this.state.bio}
        </div>
      </div>
    );
  }
}

export default Project;
