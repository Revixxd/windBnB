import { SearchElementLocationStyling } from './SearchElementLocationStyling'

export default function SearchElementLocation(props) {
    function setCityToForm(prevState, passedCity) {
        const returnObject = {
            ...prevState,
            city: passedCity,
        }
        return returnObject
    }

    return (
        <SearchElementLocationStyling>
            <span class="material-symbols-outlined">where_to_vote</span>
            <h4
                className={` ${
                    props.selectedCity === props.city
                        ? `${'currentCity'}`
                        : `${'listOfCities'}`
                }`}
                onClick={() =>
                    props.setTempFormData((prevState) => {
                        return setCityToForm(prevState, props.city)
                    })
                }
            >
                {props.city}
            </h4>
        </SearchElementLocationStyling>
    )
}
