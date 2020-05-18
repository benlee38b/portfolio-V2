import GlobalStyle from './styles/Global';
import Navbar from './components/navbar/Navbar';
import { Router } from '@reach/router';
import Homepage from './components/Homepage';
import React, { Component } from 'react';
import AboutMeBio from './components/AboutMeBio';
import ProjectCard from './components/ProjectCard';

export class App extends Component {
  state = {
    navbarOpen: false,
  };
  render() {
    return (
      <div className="App">
        {/* <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        /> */}
        <GlobalStyle />
        <Router>
          <Homepage path="/" />
          <AboutMeBio path="/about-me" />
          <ProjectCard path="projects" />
        </Router>
      </div>
    );
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
}

export default App;
