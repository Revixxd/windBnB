import React from "react";
import SearchElementLocation from "./SearchElementLocation";
import {SearchStyled} from "./searchStyling"
import useWindowDimensions from "../windowSize"

function Search(props){
    const { width,  } = useWindowDimensions();
    
    const [isMobile, setIsMobile] = React.useState()

    // make it seprate script or add it to widnowSize.js
    React.useEffect( ()=>{
        if(width <= 810){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }, [width])


    const elementsLocation = props.allCities.map(element =>{
        return(

            <SearchElementLocation handleClick = {props.setCity} content={element}/>
        )
        
    })

    const [selectedOption, setSelectedOption] = React.useState('')

    function setSelected(parameter){
        setSelectedOption(parameter)
    }

    return(


        <SearchStyled>
            
            <div className="container">
                <div locaton onClick={() => setSelected("location")} className={`element element--boxShadow  ${selectedOption === "location" ? 'element--borderSelected' : ''}`}>
                    <h3>Location</h3>
                    <p>{props.currentSelectedCity}</p>
                </div>
                <div onClick={() => setSelected("guests")} className={`element element--boxShadow ${selectedOption === "guests" ? 'element--borderSelected' : ''}`}>
                    <h3>Guests</h3>
                    <p>Add Guests</p>
                </div>
                <div className={ `element element--button ${(isMobile ? '' : 'element--boxShadow')}`}>
                    <button onClick = {props.handleClick} ><span  class="material-symbols-outlined">search</span>Search</button>
                </div>
                
                <div  className= {`chooseDiv ${selectedOption === "guests" ? `element--columnStart2` : ''}`}>

                    {selectedOption === "location" && 
                        <div className= "">
                            {elementsLocation}
                        </div>
                    }
                    
                    {selectedOption === "guests" && 
                        <div >
                            <input type="number"/>
                        </div>
                    }

                </div>
                
            </div>

            

        </SearchStyled>
    )
}

export default Search