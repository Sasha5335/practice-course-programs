import React, { Component } from 'react';
import SubParent from './SubParent ';

class Parent extends Component {
  render() {
    return (
      <>
        <SubParent />
      </>
    );
  }
}

export default Parent;
