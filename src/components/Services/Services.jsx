import React from 'react';
import './Services.css';
import MacbookContainer from './macbook/MacbookContainer';

const Services = () => {
  return (
    <div className="services">
      <div className="leftsection">
      <div className="flex">
          <p className='title-services'><span>How can </span> help you?</p>
      </div>
        <div className="flex1">
          <i className="bi bi-code-square"></i>
          <p>Web Development</p>
        </div>
        <div className="flex1">
          <img  className='graph-theory'
            src="graph_2_35dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg" 
            alt="Competitive Programming" 
          />
          <p>Competitive Programming</p>
        </div>
        <div className="flex1">
        <i className="fas fa-robot"></i>
          <p>Ai && Data && ML</p>
        </div>
      </div>
      <div className="rightsect">
      
        <MacbookContainer />
       
      </div>
    </div>
  );
};

export default Services;
