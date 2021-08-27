import React, { Component } from 'react';

class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) =>
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });

  render() {
    const { x, y } = this.state;
    const styles = {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
    };

    return (
      <>
        <div
          style={{ height: '500px', border: '3px solid black', cursor: 'none' }}
          onMouseMove={this.handleMouseMove}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png"
            alt="cat"
            style={styles}
          ></img>
        </div>
      </>
    );
  }
}

export default MouseTracker;
