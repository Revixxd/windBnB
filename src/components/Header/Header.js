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
                <h3>Location</h3>
                <h3>Add Guests</h3>
            </div>
        </HeaderStyled>
    )
}

export default Header