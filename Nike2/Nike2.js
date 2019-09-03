import React from 'react'
import styled from 'styled-components'
import { NikeOneLabel } from '../Nike/Nike'


// Modal
const Hello = styled.div`
 width: 500px;
 background-color: rgba(255,255,255,0.8);
 position: fixed; 
 top: 75px;
 z-index: 5;
 max-height: calc(100% - 100px);
 left: calc(50% - 250px);
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
    </Hello>
    </>
  );
}