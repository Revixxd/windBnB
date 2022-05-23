import {GlobalStyles} from "./components/globalStyles"
import { ContainerStyled } from "./components/containerStyling"

import Header from "./components/Header/Header"
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"
// import Footer from "./components/Header/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
        <ContainerStyled>
          <Header />
          <Gallery />
          <Footer />
        </ContainerStyled>
    </>
  );
}

export default App;
