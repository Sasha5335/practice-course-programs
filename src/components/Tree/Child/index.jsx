import React, { Component } from 'react';
import SubChild from './SubChild';

class Child extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <SubChild user={user} />
      </>
    );
  }
}

export default Child;
