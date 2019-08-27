import React from 'react';
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./banner/Banner"
import { Menu } from "./Components/Menu/Menu"
import { GlobalStyle } from "./CSS/GlobalStyle"


function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Banner img/>
     <Menu/>
    </>
  );
}


export default App;

