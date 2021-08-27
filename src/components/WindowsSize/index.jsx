import React, { Component } from 'react';
import CustomComponent from './ResizeDetector';

class WindowsSize extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateViewport);
  };

  updateViewport = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    const { width, height } = this.state;
    return (
      <>
        <div>Width: {width}</div>
        <div>Height: {height}</div>
        <CustomComponent />
      </>
    );
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewport);
  }
}

export default WindowsSize;
