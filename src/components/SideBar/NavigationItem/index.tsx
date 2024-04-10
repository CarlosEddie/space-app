import styled from "styled-components";
import React from "react";

const StyledListItem = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const NavigationItem = ({children, activeItem, InactiveItem, active = false}) => {
    return <StyledListItem $active={active}>
        <img src={active ? activeItem : InactiveItem} alt="" />
        {children}
    </StyledListItem>
}

export default NavigationItem;