import React, { useState } from 'react';
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./banner/Banner"
import { Menu } from "./Components/Menu/Menu"
import { GlobalStyle } from "./CSS/GlobalStyle"
import { Nike2 } from './Nike2/Nike2'

function App() {
  const [openSesame, setOpenSesame] = useState();
  return (
    <>
      <GlobalStyle/>
      <Nike2 openSesame={openSesame} setOpenSesame={setOpenSesame}/>
      <Navbar/>
      <Banner />
     <Menu setOpenSesame={setOpenSesame}/>
    </>
  );
}


export default App;

