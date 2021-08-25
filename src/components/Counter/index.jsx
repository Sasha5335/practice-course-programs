import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      varibleNum: null,
      checkedRadioBtn: true,
      countId: null,
    };
  }

  varibleNumber = (event) => {
    this.setState({
      varibleNum: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      checkedRadioBtn: !this.state.checkedRadioBtn,
    });
  };

  counterNumber = () => {
    const { count, varibleNum, checkedRadioBtn } = this.state;
    const number = Number(count);
    const varibleNumber = Number(varibleNum);
    this.setState({
      count: checkedRadioBtn ? number + varibleNumber : number - varibleNumber,
    });
  };

  render() {
    const { count } = this.state;
    console.log(this.props);
    return (
      <>
        <h2>{count}</h2>
        <button onClick={this.handleClick}>
          {this.state.checkedRadioBtn ? '+' : '-'}
        </button>
        <br />
        <input type="number" onChange={this.varibleNumber} />
        <br />
        <button onClick={this.counterNumber}>Добавить</button>
      </>
    );
  }
}

export default Counter;
