import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import supermarketAisle from '../assets/supermarket-aisle.jpg';
import newsWebsite from '../assets/news-website.jpg';
import crimeImg from '../assets/crime-img.png';
import ProjectCard from './ProjectCard';

export class ProjectList extends Component {
  state = {
    projects: [
      {
        projectTitle: 'Aisle Navigate',
        img: supermarketAisle,
        description:
          'a smart shopping assistant that categorieses user groceries and provides and efficient route through any supermarket using crowd sourced data.',
        gitHubLink: 'https://github.com/benlee38b/project-sweep-fe',
      },
      {
        projectTitle: 'News App',
        img: newsWebsite,
        description:
          'a news app that allows users to interact with and sort through articles similar to reddit with the ability to post and remove comments.',
        gitHubLink: 'https://github.com/benlee38b/NC-News-FE',
      },
      {
        projectTitle: 'Crime Visualisor',
        img: crimeImg,
        description:
          'an app that allows users to visualise the crime statistics within a given radius of a postcode using a third party UK police data API',
        gitHubLink: 'https://github.com/benlee38b/fe-react-data-visualisation',
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <>
        <div className="project-list-title-container">
          <h1 className="project-list-title">PROJECTS</h1>
        </div>
        <FadeIn
          className="project-list-container"
          delay="75"
          transitionDuration="1500"
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                projectTitle={project['projectTitle']}
                img={project.img}
                description={project.description}
                gitHubLink={project.gitHubLink}
              />
            );
          })}
        </FadeIn>
      </>
    );
  }
}

export default ProjectList;
