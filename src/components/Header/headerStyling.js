import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;

    .logoDiv img{
        width:100%
    }
    .navigation{
        gap:10px;
        display: flex;
        flex-direction: row;
        padding:20px;
        border: solid none;
        border-radius: 6px;
        box-shadow: 12px black;
    }
`