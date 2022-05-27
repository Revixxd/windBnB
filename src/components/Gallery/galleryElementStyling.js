import styled from "styled-components"

export const GalleryElementStyled = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;

    .imgDiv img{
        border-radius: 24px;
        width: 100%;
        max-height: 250px;
        object-fit: cover;
    }
    .infoDiv{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap:15px
    }

    .infoDivUp{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .infoDivUp--hostApartmentDiv{
        display: flex;
        flex-direction: row;
        gap:30px
    }
    .infoDivUp--raitingDiv{
        display: flex;
        align-items: center;

    }

    .material-symbols-outlined{
        font-size:20px;
        color: #EB5757;
    }

`