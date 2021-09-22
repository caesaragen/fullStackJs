import React from 'react'

const HighScore = ({resetCount}) => {
  return (
    <div>
      <h3>
        Beat High score of 10!
        <button onClick={()=>resetCount}>Reset</button>
      </h3>
    </div>
  );
};

export default HighScore
