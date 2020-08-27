import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';
import './Title.css';

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 90
  }
};

function Title() {
  return (
    <div className="container-title" style={{padding:"0px"}}>
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
       A Developer is coming...
      </SplitText>
    </div>
  );
}

export default Title