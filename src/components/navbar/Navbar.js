import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Link } from '@reach/router';
import Minimisedmenu from './MinimisedMenu';
import CollapseMenu from './CollapseMenu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

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
            <Link to="/">
              <HomeIcon
                style={{
                  fontSize: '40px',
                  margin: '5px',
                  position: 'relative',
                  bottom: '3px',
                }}
              />
              Home
            </Link>
            <Link to="/about-me">
              <AccountCircleIcon
                style={{
                  fontSize: '40px',
                  margin: '5px',
                  position: 'relative',
                  bottom: '3px',
                  left: '13px',
                }}
              />{' '}
              About Me
            </Link>
            <Link to="/projects">
              <WorkIcon
                style={{
                  fontSize: '30px',
                  margin: '5px',
                  position: 'relative',
                  bottom: '3px',
                }}
              />
              Projects
            </Link>
            <Link to="/contact">
              <ContactMailIcon
                style={{
                  fontSize: '30px',
                  margin: '5px',
                  position: 'relative',
                  bottom: '3px',
                }}
              />
              Contact
            </Link>
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
  background: #112a46;
  z-index: 3;
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
    margin: auto 2.25vw;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1022px) {
      display: none;
    }
   
`;

const MinWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1022px) {
    display: none;
  }
`;
