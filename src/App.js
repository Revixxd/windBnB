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

  //importing all cities name from data array
  const allCities = [...new Set(data.map(item => item.city))];

  const currentCountry = "Finland"  

  const [currentSelectedCity, setCurrentSelectedCity] = React.useState("Turku") 
  
  //filtering data to show objects depend on currentSelectedCity value
  const filter = data.filter(element  => element.city === currentSelectedCity )

  function setCity (city){
    setCurrentSelectedCity(city)
    setSearchTabVisible(false)
  }
  

  return (
    <>
      <GlobalStyles />
        {searchTabVisible && <Search 
        allCities = {allCities} 
        currentSelectedCity = {currentSelectedCity}
        handleClick={turnSearch} 
        setCity ={setCity}
        currentCountry = {currentCountry}
        />
        }
        {searchTabVisible && <div className="overlay"></div>}
        <ContainerStyled>
          <Header  currentSelectedCity = {currentSelectedCity} handleClick={turnSearch} />
          <Gallery  currentCountry = {currentCountry} currentSelectedCity = {currentSelectedCity} data={filter} />
          <Footer />
        </ContainerStyled>
    </>
  );
}

export default App;
