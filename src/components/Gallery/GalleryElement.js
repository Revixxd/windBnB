import {GalleryElementStyled} from "./galleryElementStyling"
function GalleryElement(props){
    console.log(props)

    return(
        <GalleryElementStyled>
            <div className="imgDiv">
                <img src={props.photo} alt="location img"></img>
            </div>
            <div className="infoDiv">
                <div className="infoDivUp">
                    <div className="infoDivUp--hostApartmentDiv">
                        {props.superHost && <h5>Super Host</h5> }
                        <p>{props.type}</p>
                    </div>
                    <div className="infoDivUp--raitingDiv">
                        {/* star icon  */}
                        <h6>{props.rating}</h6>
                    </div>
                </div>
                <div className="infoDivDown">
                    <h4>{props.title}</h4>
                </div>
            </div>
        </GalleryElementStyled>
    )
}
export default GalleryElement
