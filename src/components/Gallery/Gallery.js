import { GalleryStyled } from "./galleryStyling";

import GalleryElement from "./GalleryElement"

// importing data to show in gallery
import data from "../../data/stays.json"

export default function Gallery(){

    const galleryElements = data.map(element =>{
        return(

            <GalleryElement {...element} />
        )
    })


    return(
        <GalleryStyled>
            <h1>Stays in LOCATION</h1>
            <div className="Gallerystyled--container">
                {galleryElements}
            </div>
        </GalleryStyled>
    )
}