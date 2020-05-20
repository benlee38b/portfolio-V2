import React from 'react';
import '../styles/projectCard.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import pokemonLogo from '../assets/pokemon_logo.png';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  return (
    <motion.div
      animate
      className="project-card-container"
      whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.9 }}
    >
      {/* <div className="project-title-container">
        <h4 className="project-card-title" animate>
          Project 1
        </h4>
      </div> */}
      <div className="project-image-container">
        <img src={pokemonLogo} alt="pokemon-logo" className="project-img" />
      </div>
      <div className="project-info-container">
        <h4 className="project-card-title">Project 1</h4>
        <p className="project-info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ad
          adipisci magnam consequatur animi aut nam amet
        </p>
        <div className="git-hub-link-container">
          <Button
            className="git-hub-link-project"
            variant="contained"
            size="large"
            color="secondary"
            href="#outlined-buttons"
          >
            <GitHubIcon style={{ fontSize: 20, padding: '3px' }} />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
