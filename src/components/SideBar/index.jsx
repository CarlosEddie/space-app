import { styled } from "styled-components"
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const SideBar = () => {
    return (
        <aside>
        <nav>
            <StyledList>
                <NavigationItem
                    activeItem="/icons/active-home.png" 
                    InactiveItem="/icons/inactive-home.png"
                    active={true}
                >
                    Home
                </NavigationItem>
                <NavigationItem
                    activeItem="/icons/active-most-viewed.png" 
                    InactiveItem="/icons/inactive-most-viewed.png"
                >
                    Most Viewed
                </NavigationItem>
                <NavigationItem
                    activeItem="/icons/active-most-likes.png" 
                    InactiveItem="/icons/inactive-most-likes.png"
                >
                    Most Likes
                </NavigationItem>
                <NavigationItem
                    activeItem="/icons/active-new.png" 
                    InactiveItem="/icons/inactive-new.png"
                >
                    New
                </NavigationItem>
                <NavigationItem
                    activeItem="/icons/active-surprise-me.png" 
                    InactiveItem="/icons/inactive-surprise-me.png"
                >
                    Surprise me
                </NavigationItem>
            </StyledList>
        </nav>
        </aside>
    );
}

export default SideBar;