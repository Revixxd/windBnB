import {SearchElementLocationStyling} from "./SearchElementLocationStyling"

export default function SearchElementLocation(props){
    return(
        <SearchElementLocationStyling >
            <span class="material-symbols-outlined">where_to_vote</span>

            <h5 onClick={() => props.handleClick(props.content)} >{props.content}</h5>
            
        </SearchElementLocationStyling>
    )
}