import {SearchElementLocationStyling} from "./SearchElementLocationStyling"

export default function SearchElementLocation(props){
    return(
        <SearchElementLocationStyling >
            <span class="material-symbols-outlined">where_to_vote</span>

            <h4 onClick={() => props.handleClick(props.content)}>{props.content}, {props.currentCountry}</h4>
            
        </SearchElementLocationStyling>
    )
}