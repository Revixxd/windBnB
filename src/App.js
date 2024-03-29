import React from 'react'

//styling
import { GlobalStyles } from './components/globalStyles'
import { ContainerStyled } from './components/containerStyling'

//components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Search from './components/Search/Search'
import Gallery from './components/Gallery/Gallery'
import NoData from './components/NoData/NoData'

//data to show in gallery
import data from './data/stays.json'

//functions
import filter from './helper/app/filter'

function App() {
    //search overlay
    const [searchTabVisible, setSearchTabVisible] = React.useState(false)

    function turnSearch() {
        setSearchTabVisible((prevState) => !prevState)
    }

    const deafultFromInfoState = {
        city: 'Turku',
        country: 'Finland',
        adults: 0,
        kids: 0,
    }
    const [formInfo, setFormInfo] = React.useState(deafultFromInfoState)
    //importing all cities name from data array
    const allCities = [...new Set(data.map((item) => item.city))]

    //filtering data to show objects depend on currentSelectedCity value
    let filtered = filter(data, formInfo)

    console.log(filtered)

    return (
        <>
            <GlobalStyles />
            {searchTabVisible && (
                <Search
                    turnSearch={turnSearch}
                    allCities={allCities}
                    setFormInfo={setFormInfo}
                    formInfo={formInfo}
                />
            )}
            {searchTabVisible && <div className="overlay"></div>}
            <ContainerStyled>
                <Header
                    currentSelectedCity={formInfo.city}
                    handleClick={turnSearch}
                />
                {filtered.length === 0 ? (
                    <NoData />
                ) : (
                    <Gallery formInfo={formInfo} data={filtered} />
                )}
                <Footer />
            </ContainerStyled>
        </>
    )
}

export default App
