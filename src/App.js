import React from "react"


import {GlobalStyles} from "./components/globalStyles"
import { ContainerStyled } from "./components/containerStyling"

import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

// import Footer from "./components/Header/Footer"

function App() {

  const [searchTabVisible, setSearchTabVisible] = React.useState(false)

  function turnSearch(){
    setSearchTabVisible(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyles />
        {searchTabVisible &&<Search handleClick={turnSearch} />}
        <ContainerStyled>
          <Header handleClick={turnSearch} />
          <Gallery />
          <Footer />
        </ContainerStyled>
    </>
  );
}

export default App;
