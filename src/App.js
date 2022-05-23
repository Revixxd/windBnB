import {GlobalStyles} from "./components/globalStyles"
import { ContainerStyled } from "./components/containerStyling"

import Header from "./components/Header/Header"
// import Gallery from "./components/Header/Gallery"
// import Footer from "./components/Header/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
        <ContainerStyled>
          <Header />
          
        </ContainerStyled>
    </>
  );
}

export default App;
