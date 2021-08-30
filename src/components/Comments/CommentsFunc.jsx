import React, { useState } from 'react';

function CommentsFunc() {
  const [comment, setComment] = useState([]);
  const myRef = React.createRef();

  const addComment = () => {
    const commentValue = myRef.current.value;
    const comments = [...comment, commentValue];

    setComment(comments);
    myRef.current.value = '';
  };

  return (
    <>
      <div>
        <h2>Add comments using Function</h2>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Add comments</button>
      </div>
      <ul>
        {comment.map((item, index) => (
          <li key={`${index}${item}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default CommentsFunc;
