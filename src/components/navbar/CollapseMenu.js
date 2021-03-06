import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/" onClick={props.handleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-me" onClick={props.handleNavbar}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={props.handleNavbar}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={props.handleNavbar}>
              Contact
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #112a46;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    border-bottom: solid 0.5px;
  }

  & a {
    font-size: 2rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
