import React, { Component } from 'react';
import Slider from './Slider';

class CaruselWallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          src: 'http://placehold.it/600x400',
          title: 'title',
          descr: 'descr',
        },
        {
          src: 'http://placehold.it/600x395',
          title: 'title',
          descr: 'descr',
        },
        {
          src: 'http://placehold.it/600x390',
          title: 'title',
          descr: 'descr',
        },
        {
          src: 'http://placehold.it/600x385',
          title: 'title',
          descr: 'descr',
        },
        {
          src: 'http://placehold.it/600x380',
          title: 'title',
          descr: 'descr',
        },
      ],
      currentIndex: 0,
    };
  }

  prevSlide = () => {
    const { slides, currentIndex } = this.state;
    if (currentIndex <= slides.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1,
      });
    }
  };

  get nextSlide() {
    const { slides, currentIndex } = this.state;
    return (currentIndex + 1) % slides.length;
  }

  render() {
    const { slides, currentIndex } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        <button onClick={this.prevSlide}> Prev </button>
        <Slider slide={slides[currentIndex]} />
      </div>
    );
  }
}

export default CaruselWallpaper;
