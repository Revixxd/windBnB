import React from 'react'

//styling
import { SearchStyled } from './searchStyling'

//icons
import { ImCross } from 'react-icons/im'
//scripts
import useWindowDimensions from '../windowSize'
import SearchElementLocation from './SearchElementLocation'
import {
    increaseNumberOfGuests,
    decreseNumberOfGuests,
} from './helper/numberOfGuests'

//dd

function Search(props) {
    const { width } = useWindowDimensions()

    const [isMobile, setIsMobile] = React.useState()

    // make it seprate script or add it to widnowSize.js
    React.useEffect(() => {
        if (width <= 810) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width])

    const [tempFormData, setTempFormData] = React.useState(props.formInfo)

    const elementsLocation = props.allCities.map((city, key) => {
        return (
            <SearchElementLocation
                key={key}
                setTempFormData={setTempFormData}
                city={city}
            />
        )
    })

    const [selectedOption, setSelectedOption] = React.useState('')

    function setSelected(parameter) {
        setSelectedOption(parameter)
    }

    function onSubmitForm(e) {
        e.preventDefault()
        props.setFormInfo(tempFormData)
        props.turnSearch(false)
    }

    return (
        <SearchStyled>
            <div className="container">
                <ImCross onClick={props.turnSearch} />
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <div
                        locaton
                        onClick={() => setSelected('location')}
                        className={`element element--boxShadow  ${
                            selectedOption === 'location'
                                ? 'element--borderSelected'
                                : ''
                        }`}
                    >
                        <h3>Location</h3>
                        <p>{props.currentSelectedCity}</p>
                    </div>
                    <div
                        onClick={() => setSelected('guests')}
                        className={`element element--boxShadow ${
                            selectedOption === 'guests'
                                ? 'element--borderSelected'
                                : ''
                        }`}
                    >
                        <h3>Guests</h3>
                        <p>Add Guests</p>
                    </div>
                    <div
                        className={`element element--button ${
                            isMobile ? '' : 'element--boxShadow'
                        }`}
                    >
                        <input type="submit" value="Submit" />
                    </div>
                    <div
                        className={`chooseDiv ${
                            selectedOption === 'guests'
                                ? `${isMobile ? '' : 'element--columnStart2'}`
                                : ''
                        }`}
                    >
                        {selectedOption === 'location' && (
                            <div className="elementsLocationDiv">
                                {elementsLocation}
                            </div>
                        )}
                        {selectedOption === 'guests' && (
                            <div className="chooseDiv--selectedOption">
                                <div className="chooseDiv__selectedOption--element">
                                    <div className="chooseDiv__selectedOption__element--textDiv">
                                        <h4>Adults</h4>
                                        <p>Ages 13 or above</p>
                                    </div>
                                    <div className="chooseDiv__selectedOption__element--inputDiv">
                                        <input
                                            type="button"
                                            value="-"
                                            onClick={() =>
                                                setTempFormData((prevState) => {
                                                    return decreseNumberOfGuests(
                                                        prevState,
                                                        prevState.adults,
                                                        'adults'
                                                    )
                                                })
                                            }
                                        />
                                        <p>{tempFormData.adults}</p>
                                        <input
                                            type="button"
                                            value="+"
                                            onClick={() =>
                                                setTempFormData((prevState) => {
                                                    return increaseNumberOfGuests(
                                                        prevState,
                                                        prevState.adults,
                                                        'adults'
                                                    )
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="chooseDiv__selectedOption--element">
                                    <div className="chooseDiv__selectedOption__element--textDiv">
                                        <h4>Children</h4>
                                        <p>Ages 2-12</p>
                                    </div>
                                    <div className="chooseDiv__selectedOption__element--inputDiv">
                                        <input
                                            type="button"
                                            value="-"
                                            onClick={() =>
                                                setTempFormData((prevState) => {
                                                    return decreseNumberOfGuests(
                                                        prevState,
                                                        prevState.kids,
                                                        'kids'
                                                    )
                                                })
                                            }
                                        />
                                        <p>{tempFormData.kids}</p>
                                        <input
                                            type="button"
                                            value="+"
                                            onClick={() =>
                                                setTempFormData((prevState) => {
                                                    return increaseNumberOfGuests(
                                                        prevState,
                                                        prevState.kids,
                                                        'kids'
                                                    )
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </SearchStyled>
    )
}

export default Search
