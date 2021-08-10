/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';

import { Nav, Title, Username } from './styled';
import LogoInitials from '../LogoInitials';
import LogoTopBar from '../LogoTopBar';

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
const username = 'Fábio Lins';

export default function TopBar() {
  return (
    <Nav>
      <LogoTopBar />
      <Title>Squad Management Tool</Title>
      <Username>{username}</Username>
      <LogoInitials name={username} size={35} fontSize={16} />
    </Nav>
  );
}
