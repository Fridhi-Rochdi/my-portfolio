import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
  return (
    <div className='BubbleContainer'>
      <div className="bubble">
        <TypeAnimation
          sequence={[
            'Innovative Software Developer passionate about solving real-world problems.',
            2000,
            'Skilled in Machine Learning, Data Analysis, and Collaborative Projects.',
            2000,
            'Ready to contribute and drive impactful change.',
            2000,
            '', // Clear the text
            500,  // Wait before starting again
          ]}
          speed={40}
          repeat={Infinity}
        />
      </div>
      <img src="./man.png" alt="Profile" />
    </div>
  );
}

export default Speech;
