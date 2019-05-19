import React, { Component } from 'react';

class Floater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      left: 0,
      className: null,
      animationPlayState: 'running'
    }
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    const { index, start } = this.props;
    this.setState({
      left: (index / 10) * (window.innerWidth / 3.7),
    });
    window.addEventListener('resize', () => {
      this.setState({
        left: (index / 10) * (window.innerWidth / 3.7),
      });
    });
    setTimeout(() => {
      this.setState({
        className: 'floater-animation'
      });
    }, start * 500)
  }

  handleMouseLeave() {
    this.setState({
      animationPlayState: 'running'
    });
  }

  handleMouseOver() {
    this.setState({
      animationPlayState: 'paused'
    });
  }

  render() {
    const { title } = this.props;
    const { left, className, animationPlayState } = this.state;
    return (
      <span
        className={`${className} floater`}
        style={{ left, animationPlayState }}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {title}
      </span>
    );
  }
};

export default Floater;
