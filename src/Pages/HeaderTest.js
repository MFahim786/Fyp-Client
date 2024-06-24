import React from 'react';

const HeaderTest = ({ count,left_width,right_width, incrementCount }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Change State</button>
    </div>
  );
};

export default HeaderTest;

