import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ContainerImages = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [] }) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                    <ContainerImages>
                        {photos.map(photo => <Image
                            key={photo.id} 
                            photo={photo} />)
                        }
                    </ContainerImages>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}

export default Gallery;