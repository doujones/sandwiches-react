import React from 'react';
import styled from 'styled-components';
import {texts} from '../Info/Info'
import {Nike, Nike1, NikeOneLabel} from "../Nike/Nike"

const Menu2 = styled.div`
margin: 0px 400px 50px 21px;
height: 1000px;
`

export function Menu({ setOpenSesame }){
  return (
    <Menu2>
    {Object.entries(texts).map(([ sectionName, texts]) =>(
    <>
  <h1>{sectionName}</h1>
  <Nike>
  {texts.map(nike1 => (
   <Nike1
   img={nike1.img} 
   onClick={() =>{
     setOpenSesame(nike1.name);
   }}>
   <NikeOneLabel>{nike1.name}</NikeOneLabel>
   </Nike1>
  ))}
  </Nike>
  </>
))}
  </Menu2>
);
}

