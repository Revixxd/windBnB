import styled from 'styled-components'

export const HeaderStyled = styled.header`
    font-family: 'Mulish', sans-serif;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content:space-between;
    align-items: center;

    .logoDiv img{
        width:100%
    }
    .navigation{
        gap:10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:15px;
        border: solid none;
        border-radius: 16px;
        
        -webkit-box-shadow: 0px 0px 28px -13px rgba(66, 68, 90, 1);
        -moz-box-shadow: 0px 0px 28px -13px rgba(66, 68, 90, 1);
        box-shadow: 0px 0px 28px -13px rgba(66, 68, 90, 1);    
    }
    .navigation > h4:hover, span:hover{
        cursor: pointer;
    }

    .material-symbols-outlined{
        font-weight: 600;
    }
`