import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
   <div className='Navbar'>
    
                        <div className="icone-item">
                        <a href="https://www.linkedin.com/in/rochdi-fridhi-845556303/">
                        <i className="bi bi-linkedin"></i> 
                        <p className='social-media'>Linkdin</p>
                        </a>
                        </div>
                        <div className="icone-item">

                        <a href="https://github.com/Fridhi-Rochdi">
                            <i className="bi bi-github"></i>
                            <p className='social-media'>Github</p>
                        </a>
                        </div>
                        <div className="icone-item">
                        <a href="https://www.facebook.com/fridhirochdi.fridhi">
                            <i className="bi bi-facebook"></i>
                            <p className='social-media'>Facebook</p>
                        </a>
                        </div>
   </div>
  );
};

export default Navbar;
