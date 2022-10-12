import { GalleryStyled } from './galleryStyling'

import GalleryElement from './GalleryElement'

export default function Gallery(props) {
    const galleryElements = props.data.map((element, key) => {
        return <GalleryElement key={key} {...element} />
    })

    return (
        <GalleryStyled>
            <h1>Stays in {props.formInfo.city}</h1>
            <div className="Gallerystyled--container">{galleryElements}</div>
        </GalleryStyled>
    )
}
