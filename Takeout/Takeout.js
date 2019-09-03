import React from 'react'
import styled from 'styled-components'
import {NikeContent, NikeFooter, SubmitButton} from '../Nike2/Nike2'


// Sidebar to Takeout Orders
const TakeoutStyled = styled.div`
position: fixed;
right: 0px;
top: 48px;
width: 340px;
background-color: white;
z-index: 10;
height: calc(100% - 48px);
box-shadow: 4px 0px 5px 4px purple;
display: flex;
flex-direction: column;
`;

const TakeoutContent = styled(NikeContent)`
padding: 20px;
height: 100%;
`

export function Takeout(){
  return <TakeoutStyled>
   <TakeoutContent>
   Empty Cart
   </TakeoutContent>
   <NikeFooter>
    <SubmitButton>
    Checkout
    </SubmitButton>
   </NikeFooter>
   </TakeoutStyled>
}