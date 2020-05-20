import React, { Component } from 'react';
import supermarketAisle from '../assets/supermarket-aisle.jpg';
import ProjectCard from './ProjectCard';

export class ProjectList extends Component {
  state = {
    projects: [
      {
        projectTitle: 'Aisle Navigate',
        img: supermarketAisle,
        description:
          'a smart shopping assistant that categorieses user groceries and provides and efficient route through any supermarket using crowd sourced data',
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <main className="project-list-containers">
        {projects.map((project) => {
          return (
            <ProjectCard
              projectTitle={project['projectTitle']}
              img={project.img}
              description={project.description}
            />
          );
        })}
      </main>
    );
  }
}

export default ProjectList;
