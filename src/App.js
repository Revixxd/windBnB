import React from 'react'

import { GlobalStyles } from './components/globalStyles'
import { ContainerStyled } from './components/containerStyling'

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'

import data from './data/stays.json'

function App() {
    const [searchTabVisible, setSearchTabVisible] = React.useState(false)

    function turnSearch() {
        setSearchTabVisible((prevState) => !prevState)
    }

    const [numberOfGuests, setNumberOfGueasts] = React.useState(0)

    //importing all cities name from data array
    const allCities = [...new Set(data.map((item) => item.city))]

    const currentCountry = 'Finland'

    const [currentSelectedCity, setCurrentSelectedCity] =
        React.useState('Turku')

    //filtering data to show objects depend on currentSelectedCity value
    const filter = data.filter(
        (element) => element.city === currentSelectedCity
    )

    function setCity(city) {
        setCurrentSelectedCity(city)
        setSearchTabVisible(false)
    }

    const deafultFromInfoState = {
        city: '',
        country: '',
        numberOfGuests: '',
    }
    const [formInfo, setFormInfo] = React.useState(deafultFromInfoState)

    return (
        <>
            <GlobalStyles />
            {searchTabVisible && (
                <Search
                    handleClick={turnSearch}
                    allCities={allCities}
                    setFormInfo={setFormInfo}
                    formInfo={formInfo}
                    //bellow to delete
                    currentSelectedCity={currentSelectedCity}
                    setCity={setCity}
                    currentCountry={currentCountry}
                    numberOfGuests={numberOfGuests}
                    setNumberOfGueasts={setNumberOfGueasts}
                />
            )}
            {searchTabVisible && <div className="overlay"></div>}
            <ContainerStyled>
                <Header
                    currentSelectedCity={currentSelectedCity}
                    handleClick={turnSearch}
                />
                <Gallery
                    currentCountry={currentCountry}
                    currentSelectedCity={currentSelectedCity}
                    data={filter}
                    numberOfGuests={numberOfGuests}
                />
                <Footer />
            </ContainerStyled>
        </>
    )
}

export default App
