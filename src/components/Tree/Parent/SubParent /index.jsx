import React, { Component } from 'react';
import { UserContext } from '../../../../context';

class SubParent extends Component {
  render() {
    const renderFunction = (value) => {
      const { id, firstName, lastName } = value;
      return (
        <div>
          {id}
          <br />
          {firstName}
          <br />
          {lastName}
        </div>
      );
    };

    return (
      <>
        <UserContext.Consumer>{renderFunction}</UserContext.Consumer>
      </>
    );
  }
}

export default SubParent;
