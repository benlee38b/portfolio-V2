import React from 'react';
import '../styles/homepage.css';
import photo from '../assets/ben-lee.jpg';

const Homepage = () => {
  return (
    <main className="homepage-container">
      <img className="profile-pic" src={photo} alt="profile" />
      <h1 className="job-title">Junior Full Stack Developer</h1>
      <p className="tech-list">Front End: HTML | CSS | React | Axios </p>
      <p className="tech-list">
        Back End: Javascript | Node.js | MongoDB | PSQL | express{' '}
      </p>
    </main>
  );
};
export default Homepage;
