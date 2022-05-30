import styled from "styled-components";

export const SearchStyled = styled.div`
    p{
        font-size: 14px;
    }

    background-color: #ffffff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .material-symbols-outlined{
        font-size: 15px;
        font-weight: bold;
    }
    .container{
        grid-row-gap: 2vh;
        grid-column-gap: 5px;
        display: grid;
        grid-template-columns: repeat( auto-fit,minmax(150px,1fr) );
        max-width: 1300px;
        margin: 7vh auto;
        width: 90%;
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
    
    .element--columnStart2{
        grid-column-start: 2;
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
        padding: 0px 20px;
        grid-row-start: 3;
        min-height: 180px;
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

    .elementsLocationDiv{
        display: flex;
        flex-direction: column;
        gap:20px
    }

    .chooseDiv--selectedOption{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .chooseDiv__selectedOption--element{
        
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .chooseDiv__selectedOption--element button{
        padding: 3px;
        background-color: transparent;
        border: 1px solid #828282;
        border-radius: 4px;
        display: flex;
        align-items: center;
    }

    .chooseDiv__selectedOption__element--inputDiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px
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