import styled from "styled-components"

export const GalleryStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap:2vh;
    min-height: 800px;
    .Gallerystyled--container{
        display: grid;
        gap:2vw;
        grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    }
`