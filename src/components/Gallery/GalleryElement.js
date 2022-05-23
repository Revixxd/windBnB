import {GalleryElementStyled} from "./galleryElementStyling"
function GalleryElement(){
    return(
        <GalleryElementStyled>
            <div className="imgDiv">
                <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="location img"></img>
            </div>
            <div className="infoDiv">
                <div className="infoDivUp">
                    <div className="infoDivUp--hostApartmentDiv">
                        <h5>Super Host</h5>
                        <p>Private Room</p>
                    </div>
                    <div className="infoDivUp--raitingDiv">
                        {/* star icon  */}
                        <h6>4.40</h6>
                    </div>
                </div>
                <div className="infoDivDown">
                    <h4>Description</h4>
                </div>
            </div>
        </GalleryElementStyled>
    )
}
export default GalleryElement
