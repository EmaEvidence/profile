import React, { Component } from 'react';

const links = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ema.evidence'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/EMMANUELALABI'
  },
  {
    name: 'Github',
    url: 'https://github.com/EmaEvidence'
  },
  {
    name: 'Blog',
    url: 'https://medium.com/@emaevidenc'
  },
  {
    name: 'Resume',
    url: 'https://docs.google.com/document/d/1p1JrQShkEb6nax3L0er0uoEpIsbcgOhAbrrEb7YUKnE/edit?usp=sharing'
  }
]

class Connect extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      message: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      firstname,
      lastname,
      message,
      email
    } = this.state;
    return (
      <div className="profile">
        <div className="text">
        <div>
          <span className="form-header">Send a Mail</span>
          <div className="form-wrapper">
            <form
              className="form"
              id="gform"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbzrLc48y0iVAmaHfp8LXE_3-sVECIR7PJtgg5sadQ/exec"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  name='firstname'
                  value={firstname}
                  onChange={this.onChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name='lastname'
                  value={lastname}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  value={email}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Enter your message"
                  name='message'
                  value={message}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="connect-links">
            {
              links.map(item => (
                <span className="link">
                  <a href={item.url} target="new">{item.name}</a>
                  <span className="selected indicator" />
                </span>
              ))
            }
          </div>
          <span className="email">Email: <a href="mailto:emmanuelalabi563@gmail.com" target="blank">emmanuelalabi563@gmail.com</a></span>
        </div>
        </div>
      </div>
    );
  }
}

export default Connect;
