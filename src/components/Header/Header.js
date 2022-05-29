import { HeaderStyled } from "./headerStyling"

import logo from "../../resources/img/logo.png"

function Header(props){
    return(
        <HeaderStyled>
            <div className="logoDiv">
                <img src={logo} alt="logo">
                </img>
            </div>
            <div className="navigation">
                <h4>{props.currentSelectedCity}</h4>
                <h4 onClick = {props.handleClick} className="navigation--addGuests">Add Guests</h4>
                <span onClick = {props.handleClick} className="material-symbols-outlined">search</span>
            </div>
        </HeaderStyled>
    )
}

export default Header