import styled from 'styled-components'

export const GalleryElementStyled = styled.div`
    p {
        font-weight: 500;
        font-size: 14px;
    }
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .imgDiv img {
        border-radius: 24px;
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .infoDiv {
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .infoDivUp {
        height: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .infoDivUp--hostApartmentDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .infoDivUp--hostApartmentDiv h5 {
        padding: 5px 8px;
        border-radius: 12px;
        border: solid 1px #4f4f4f;
    }
    .infoDivUp--raitingDiv {
        display: flex;
        align-items: center;
    }
    .infoDivUp--raitingDiv p {
        color: #4f4f4f;
    }

    .material-symbols-outlined {
        padding-bottom: 5px;
        color: #eb5757;
    }
`
