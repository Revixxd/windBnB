import styled from 'styled-components'

export const SearchStyled = styled.div`
    p {
        font-size: 14px;
    }
    background-color: #ffffff;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    .container {
        position: relative;
        padding: 2%;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    //style for icons next to location options
    .material-symbols-outlined {
        font-size: 25px;
        font-weight: bold;
    }
    form {
        button {
            cursor: pointer;
        }
        grid-row-gap: 2vh;
        grid-column-gap: 5px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

        input[type='submit'] {
            border: none;
            background-color: transparent;
        }
        input[type='submit'] a {
            color: blue;
        }
    }
    svg {
        cursor: pointer;
    }

    // on selected
    .element {
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 16px;
        border: 1px solid white;
        input {
            cursor: pointer;
        }
    }

    .element--borderSelected {
        border: 1px black solid;
    }

    //shadow for elements
    .element--boxShadow {
        -webkit-box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
        -moz-box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
        box-shadow: 0px 0px 5px -1px rgba(177, 177, 181, 1);
    }

    //for grid
    .element--columnStart2 {
        grid-column-start: 2;
    }

    .element--button {
        padding: 0px;
        background-color: #f21a1acf;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .element--button input {
        width: 100%;
        padding: 10px 30px;

        font-size: 1.3rem;
        color: #333333;
    }

    .elementsLocationDiv {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .listOfCities {
        font-weight: 100;
    }
    .currentCity {
        font-weight: 600;
    }
    //
    .chooseDiv {
        padding: 0px 20px;
        grid-row-start: 3;
        min-height: 180px;
    }

    .chooseDiv input[type='button'] {
        padding: 3px 5px;
        background-color: transparent;

        font-size: 1rem;

        border: 1px solid #828282;
        border-radius: 4px;
    }

    .chooseDiv--selectedOption {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .chooseDiv__selectedOption--element {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .chooseDiv__selectedOption__element--inputDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        p {
            font-size: 1rem;
            width: 10px;
            display: flex;
            justify-content: center;
        }
        input {
            cursor: pointer;
        }
    }

    //media instead of max width depend on const
    @media (max-width: 810px) {
        form {
            grid-template-columns: 1fr;
        }
        .element--list {
            grid-row-start: 3;
        }
    }
`
