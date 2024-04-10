import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png';

const BackgroundGradient = styled.div`
  background: linear-gradient( 174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76% ); 
  width:100%; 
  min-height: 100vh;
`

const Container = styled.div`
  margin-inline: auto;
  display: flex;
  gap: 24px;
`
function App() {

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <Header />
      <Container>
        <SideBar />
        <Banner
          text="The most complete gallery of space photos!"
          backgroundImage={bannerBackground}
        />
      </Container>
      
    </BackgroundGradient>
  )
}

export default App
