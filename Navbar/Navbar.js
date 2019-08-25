import React from 'react';
import styled from 'styled-components';
import { purple, yellow, white } from "../CSS/Cascade"
import { Title } from "../CSS/title"

export function Navbar(){
  return <NavbarStyled>
    <Tagged>
      Sandwiches
    </Tagged>
  </NavbarStyled>;
}

const Tagged = styled(Title)`
color: ${yellow};
font-size: 22px;
text-shadow: 5px 3px 2px black;
`

export const NavbarStyled = styled.div`
background-color: ${purple};
color: ${white};
padding: 10px;
position: fixed;
width: 100%;
z-index: 999;
`


// Use template literals to access CSS from an import