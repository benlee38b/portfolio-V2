import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardDeck';
import pokemonLogo from '../assets/pokemon_logo.png';

const ProjectCard = () => {
  return (
    <section className="project-card-container">
      <div className="project-title-container">
        <h4 className="-project-card-title">Project 1</h4>
      </div>
      <div className="project-image-container">
        <img src={pokemonLogo} alt="pokemon-logo" />
      </div>
      <div className="project-info-container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad
          adipisci magnam consequatur animi aut nam amet fuga, nulla nisi?
          Voluptates vero eveniet ipsum numquam blanditiis voluptatem quo sint
          pariatur.
        </p>
      </div>
    </section>
  );
};
export default ProjectCard;
