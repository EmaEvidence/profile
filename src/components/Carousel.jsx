import React, { Component } from 'react';
import CarouselPrev from '../assets/CarouselPrev.png';
import CarouselNext from '../assets/CaroselNext.png';
import Skill from './Skill';
import Project from './Project';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.generateDots = this.generateDots.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  generateDots() {
    const { data } = this.props;
    const { current } = this.state;
    return data.map((item, index) => {
      const activeClass = (index === current) ? 'selected-dot' : '';
      return (
        <div
          className={`dot ${activeClass}`}
          onClick={() => {
            this.handleChange('dot', index)
          }}
        />
      )
    })
  }

  renderCards() {
    const { data, type } = this.props;
    const { current } = this.state;
    if (type !== 'skill') {
      return data.map((item, index) => {
        if (index === current) return (<Project isCarousel key={item.name} project={item} />);
      });
    }
    return data.map((item, index) => {
      if (index === current) return (<Skill isCarousel key={item.name} skill={item} />);
    });
  }

  handleChange(type, current = this.state.current) {
    const { data } = this.props;
    if (type === 'next') {
      current = ((current + 1) > (data.length - 1)) ? 0 : current + 1;
      return this.setState({
        current
      });
    } else if (type === 'prev') {
      current = ((current - 1) < 0) ? (data.length - 1) : current - 1;
      return this.setState({
        current
      });
    }
    return this.setState({
      current
    });
    
  }

  render() {
    return (
      <div className="carousel">
        <div
          className="prev" onClick={() => {
            this.handleChange('prev')
          }}
        >
          <img className="carousel-control" src={CarouselPrev} alt="Previous" />
        </div>
        <div className="carousel-card">
          {
            this.renderCards()
          }
        </div>
        <div
          onClick={() => {
            this.handleChange('next')
          }}
          className="next"
        >
          <img className="carousel-control" src={CarouselNext} alt="Next" />
        </div>
        <div className="dots">
          {
            this.generateDots()
          }
        </div>
      </div>
    )
  }
}

export default Carousel;
