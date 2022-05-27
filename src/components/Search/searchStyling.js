import styled from "styled-components";

export const SearchStyled = styled.div`

    background-color: #ffffff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    .container{
        margin: 5%;
        grid-row-gap: 2vh;
        grid-column-gap:5px;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
    }
    .element{
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 16px;

    }
    
    .element--borderSelected{
        border: 1px black solid;
    }
    .element--boxShadow{
        -webkit-box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
        -moz-box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
        box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
    }
    
    .element--boxShadow--red{
        background-color: red;
    }

    .element--button{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    .chooseDiv{
        padding: 5%;
        grid-row-start: 3;
        
    }

    .element--button button{
        cursor: pointer;
        display: flex;
        align-items:center;
        gap:5px;
        background-color: #EB5757E5;
        border: none;
        color: #ffffff;
        padding: 5px 15px;
        border-radius: 8px;
    }

    @media (max-width: 810px){
        .container{
            grid-template-columns: 1fr ;
        }
        .element--list{
            grid-row-start: 3;
        }
    }



`