import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import bannerBackground from './assets/banner.png';
import Gallery from "./components/Gallery"

import photos from './photos.json';
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

const BackgroundGradient = styled.div`
  background: linear-gradient( 174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76% ); 
  width:100%; 
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width:100%;
`

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const tagFilter = !tag || photo.tagId === tag;
      const titleFilter = !filter || photo.title.toLowerCase().includes(filter.toLowerCase())
      return tagFilter && titleFilter
    })
    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const whenToggleFavorite = (photo) => {

    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
      }
    }));
  }
  


  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header setFilter={setFilter}/>
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="The most complete gallery of space photos!"
              backgroundImage={bannerBackground}
            />
            <Gallery whenPhotoSelected={photo => setSelectedPhoto(photo)} whenToggleFavorite={whenToggleFavorite} photos={galleryPhotos} setTag={setTag}/>
          </GalleryContent>
        </MainContainer>
        <Footer />
      </AppContainer>
      <ModalZoom photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} whenToggleFavorite={whenToggleFavorite}/>
    </BackgroundGradient>
  )
}

export default App
