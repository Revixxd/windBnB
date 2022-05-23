import { HeaderStyled } from "./headerStyling"

import logo from "../../resources/img/logo.png"

function Header(){
    return(
        <HeaderStyled>
            <div className="logoDiv">
                <img src={logo} alt="logo">
                </img>
            </div>
            <div className="navigation">
                <h4>Current Location</h4>
                <h4 className="navigation--addGuests">Add Guests</h4>
                <span class="material-symbols-outlined">search</span>
            </div>
        </HeaderStyled>
    )
}

export default Header