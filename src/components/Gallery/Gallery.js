import { GalleryStyled } from "./galleryStyling";

import GalleryElement from "./GalleryElement"



export default function Gallery(props){


    const fillteredData = props.data.filter(item => item.maxGuests > props.numberOfGuests)

    const galleryElements = fillteredData.map(element =>{
        return(

            <GalleryElement {...element} />
        )
    })


    return(
        <GalleryStyled>
            <h1>Stays in {props.currentCountry}</h1>
            <div className="Gallerystyled--container">
                {galleryElements}
            </div>
        </GalleryStyled>
    )
}