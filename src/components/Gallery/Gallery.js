import { GalleryStyled } from "./galleryStyling";

import GalleryElement from "./GalleryElement"

export default function Gallery(){
    return(
        <GalleryStyled>
            <h1>Stays in LOCATION</h1>
            <div className="Gallerystyled--container">
                <GalleryElement />
                <GalleryElement />
                <GalleryElement />
                <GalleryElement />
                <GalleryElement />
                <GalleryElement />
            </div>
        </GalleryStyled>
    )
}