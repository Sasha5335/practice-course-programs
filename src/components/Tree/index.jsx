import React, { Component } from 'react';
import { UserContext } from '../../context';
import Parent from './Parent';
import Child from './Child';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'Test',
        lastName: 'Testovich',
      },
    };
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <UserContext.Provider value={user}>
          <Parent user={user} />
          <br />
        </UserContext.Provider>
        <Child user={user} />
      </>
    );
  }
}

export default Tree;
