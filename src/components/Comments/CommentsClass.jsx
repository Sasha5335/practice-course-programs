import React, { Component } from 'react';

class CommentsClass extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.myRef = React.createRef();
  }

  addComment = () => {
    const { comments } = this.state;
    let comment = this.myRef.current.value;

    comments.push(comment);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = '';
  };

  render() {
    const { comments } = this.state;

    return (
      <>
        <div>
          <h2>Add comments using Function</h2>
          <textarea ref={this.myRef}></textarea>
        </div>
        <div>
          <button onClick={this.addComment}>Add comment</button>
        </div>
        <ul>
          {comments.map((item, index) => (
            <li key={`${index}${item}`}>{item}</li>
          ))}
        </ul>
        <hr />
      </>
    );
  }
}

export default CommentsClass;
