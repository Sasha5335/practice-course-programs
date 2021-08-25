import React, { Component } from 'react';

class Slider extends Component {
  render() {
    const {
      slide: { src, title, descr },
    } = this.props;
    return (
      <div>
        <img src={src} alt={descr} />
        <div>{title}</div>
        <div>{descr}</div>
      </div>
    );
  }
}

export default Slider;
