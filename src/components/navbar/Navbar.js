import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Link } from '@reach/router';
import Minimisedmenu from './MinimisedMenu';
import CollapseMenu from './CollapseMenu';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </NavLinks>
          <MinWrapper>
            <Minimisedmenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </MinWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #290628;
  z-index: 1;
  font-size: 3.5rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-evenly;
  height: 7rem;

  @media (max-width: 1115px) {
    padding: 0 1rem;
    justify-content: start;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    margin: auto 60px;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #9a9283;
      border-bottom: 1px solid #9a9283;
    }

    @media (max-width: 1116px) {
      display: none;
    }
  }
`;

const MinWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1115px) {
    display: none;
  }
`;
