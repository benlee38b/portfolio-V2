import React from 'react';
import '../styles/about-me.css';
import photo from '../assets/ben-lee.png';

const AboutMeBio = () => {
  return (
    <main className="bio-container">
      <img className="profile-pic-about-me" src={photo} alt="profile" />
      <section className="about-me-text-container">
        <h1 className="about-me-title">About Me</h1>
        <p className="bio-text">
          Ben Lee is a recent graduate from the award-winning{' '}
          <a
            href="https://northcoders.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="northcoders-link"
          >
            Northcoders
          </a>{' '}
          Coding Bootcamp in Manchester. The course has a particular focus on
          JavaScript and working collaboratively in an agile environment.
          Previously, he worked in schools and the higher education sector.
          Until the end of January 2020, he worked as a data administrator at
          Manchester Metropolitan University, where he developed a keen interest
          in computer programming. Ben Lee’s other work has included: working as
          an advisor for the university’s pastoral team; teaching and supporting
          students in GCSE mathematics at The Kingsway School, Manchester; and
          private mathematics tuition. Ben graduated with a BSc(Hons) Chemistry
          (upper second class) from The University of Manchester in 2017.
        </p>
      </section>
    </main>
  );
};

export default AboutMeBio;
