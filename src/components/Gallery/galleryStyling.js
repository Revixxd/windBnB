import styled from "styled-components"

export const GalleryStyled = styled.article`
    display: flex;
    flex-direction: column;
    gap:5vh;
    .Gallerystyled--container{
        display: grid;
        gap:2vw;
        grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    }
`