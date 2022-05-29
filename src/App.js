import React from "react"


import {GlobalStyles} from "./components/globalStyles"
import { ContainerStyled } from "./components/containerStyling"

import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"

import data from "./data/stays.json"

function App() {

  const [searchTabVisible, setSearchTabVisible] = React.useState(false)

  function turnSearch(){
    setSearchTabVisible(prevState => !prevState)
  }

  const allCities = [...new Set(data.map(item => item.city))];


  const [currentSelectedCity, setCurrentSelectedCity] = React.useState("Helsinki") 
  
  const filter = data.filter(element  => element.city === currentSelectedCity )


  return (
    <>
      <GlobalStyles />
        {searchTabVisible &&<Search allCities = {allCities} handleClick={turnSearch} />}
        <ContainerStyled>
          <Header  currentSelectedCity = {currentSelectedCity} handleClick={turnSearch} />
          <Gallery  currentSelectedCity = {currentSelectedCity} data={filter} />
          <Footer />
        </ContainerStyled>
    </>
  );
}

export default App;
