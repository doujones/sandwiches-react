import React from 'react'
import styled from 'styled-components'
import { NikeOneLabel } from '../Nike/Nike'
import { orangeRed } from '../CSS/Cascade'
import {Title} from "../CSS/title"


// Modal
const Hello = styled.div`
 width: 500px;
 background-color: white;
 position: fixed; 
 top: 75px;
 z-index: 5;
 max-height: calc(100% - 100px);
 left: calc(50% - 250px);
 display: flex;
 flex-direction: column;
`
export const NikeContent = styled.div`
overflow: auto;
min-height: 100px;
`

// Footer
export const NikeFooter = styled.div`
height: 60px;
box-shadow: 0px -2px 20px 0px purple;
display: flex;
justify-content: center;
`

export const SubmitButton = styled(Title)`
margin: 10px;
color: white;
height: 20px; 
border-radius: 5px;
padding: 10px;
text-align: center;
width: 200px;
cursor: pointer;
background-color: ${orangeRed};
`

const HelloShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const NikeBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
${({ img }) => `background-image: url(${img});`}
background-position: center;
background-size: cover;
`;

const Nike2BannerName = styled(NikeOneLabel)`
top: 100px;
font-size: 31px;
padding: 5px 40px;
`


// To click off modal
  export function Nike2({openSesame, setOpenSesame}){
    function close(){
      setOpenSesame();
    }
    if(!openSesame) return null;
    return (
    <>
    <HelloShadow onClick={close}/>
    <Hello>
    <NikeBanner img={openSesame.img}>
    <Nike2BannerName>{openSesame}</Nike2BannerName>
    </NikeBanner>
    <NikeContent>
      <NikeFooter>
      <SubmitButton>Place Your Order</SubmitButton>
      </NikeFooter>
    </NikeContent>
    </Hello>
    </>
  );
}