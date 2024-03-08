import React from 'react'
import styles from '../style.module.css'
import {Link} from 'react-router-dom';  

const Home = () => {
  return (
      <div className={styles.home}>
  
        <div className={styles.links}>
          <Link to="/sos">
            <div>Summer of Science</div>
            <span>by MnP Club</span>
          </Link>
  
          <Link to="https://itc.gymkhana.iitb.ac.in/wncc/soc/">
            <div>Season of Codes</div>
            <span>by WnCC Club</span>
          </Link>
  
          <Link to="/ksp">
            <div>Krittika Summer Projects</div>
            <span>by Krittika Club</span>
          </Link>
  
          <Link to="/itsp">
            <div>Institute Technical Summer Projects</div>
            <span></span>
          </Link>
  
        </div>
        <p>
          Institute Technical Summer Activities aka ITSA is an annual program organized by ITC.
          The aim is to provide first-hand technical exposure over the period of summer vacations. 
          <br />
          It also serves as a platform where one explores a field not aligned with their own major. <br /> 
          Students are encouraged to also target some real-life problems that can be solved using technology.
        </p>
  
      </div>
  );
};

export default Home;
