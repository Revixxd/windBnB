import {SearchElementLocationStyling} from "./SearchElementLocationStyling"

export default function SearchElementLocation(props){
    return(
        <SearchElementLocationStyling >
            <span class="material-symbols-outlined">pin_drop</span>

            <p onClick={() => props.handleClick(props.content)} >{props.content}</p>
            
        </SearchElementLocationStyling>
    )
}