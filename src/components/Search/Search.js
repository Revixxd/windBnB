import React from "react";
import SearchElementLocation from "./SearchElementLocation";
import {SearchStyled} from "./searchStyling"
import useWindowDimensions from "../windowSize"

function Search(){
    const { width } = useWindowDimensions();
    
    const [isMobile, setIsMobile] = React.useState()

    // make it seprate script
    React.useEffect( ()=>{
        if(width <= 810){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }, [width])


    const arrayOfLocation = [
        'berlin',
        'london'
    ]

    const elementsLocation = arrayOfLocation.map(element =>{
        return(

            <SearchElementLocation content={element}/>
        )
        
    })


    return(


        <SearchStyled>
            
            <div className="container">
                <div className="element element--location element--boxShadow">
                    <h3>Current Location</h3>
                    <p>Helsiniki</p>
                </div>
                <div className="element element--boxShadow">
                    <h3>Guests</h3>
                    <p>Add Guests</p>
                </div>
                <div className={ "element element--button " + `${(isMobile ? '' : 'element--boxShadow')}`}>
                    <button><span class="material-symbols-outlined">search</span>Search</button>
                </div>
                <div className="element--list">
                    {elementsLocation}
                </div>
            </div>

        </SearchStyled>
    )
}

export default Search