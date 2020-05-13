import { Router, Link } from '@reach/router';
import GlobalStyle from './styles/Global';
import Navbar from './components/navbar/Navbar';

import React, { Component } from 'react';

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
      </div>
    );
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
}

export default App;
