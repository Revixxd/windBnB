import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0px;
        padding:0px;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    h1,h2,h3,h4,h5,h6{
        color:#333333;
    }
    p,a{
        font-weight: 400;
        color:#828282;
    }
    u{
        font-weight: bold;
    }
    a{
        text-decoration: none;
    }
    h1{
        font-weight:700;
    }

    h1, .navigation > h4, p, .infoDivUp--hostApartmentDiv, footer, element, span {
        user-select: none;
    }

    .overlay{
        position:fixed;
        height:100%;
        width:100%;
        background: rgba(79, 79, 79, 0.4);
        z-index:1;
        opacity: 1;
    }

`
