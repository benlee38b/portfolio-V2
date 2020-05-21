import React from 'react';
import '../styles/projectCard.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
// import pokemonLogo from '../assets/pokemon_logo.png';
import { motion } from 'framer-motion';

const ProjectCard = (props) => {
  const { projectTitle, img, description, gitHubLink } = props;
  return (
    <motion.div
      animate
      className="project-card-container"
      whileHover={{ scale: 1.1 }}
    >
      <div className="project-image-container">
        <img src={img} alt="project-img" className="project-img" />
      </div>
      <div className="project-info-container">
        <h4 className="project-card-title">{projectTitle}</h4>
        <p className="project-info-text">{description}</p>
        <div className="git-hub-link-container">
          <Button
            className="git-hub-link-project"
            variant="contained"
            size="large"
            color="secondary"
            href={gitHubLink}
            target="_blank"
          >
            <GitHubIcon
              style={{ fontSize: 20, padding: '3px', color: '#112a46' }}
            />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
