import React from 'react';
import styled from 'styled-components';

import home from '../../assets/home-icon.png';

const HomeIcon = () => {
  return <Image src={home} alt="Home Icon" />;
};

export default HomeIcon;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
  colour: red;
`;
