import GlobalStyle from './styles/Global';
import Navbar from './components/navbar/Navbar';
import { Router } from '@reach/router';
import Homepage from './components/Homepage';
import React, { Component } from 'react';
import AboutMeBio from './components/AboutMeBio';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';

export class App extends Component {
  state = {
    navbarOpen: false,
  };
  render() {
    return (
      <div className="App">
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Router>
          <Homepage path="/" />
          <AboutMeBio path="/about-me" />
          <ProjectList path="/projects" />

          <ContactForm path="/contact" />
        </Router>
      </div>
    );
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
}

export default App;
