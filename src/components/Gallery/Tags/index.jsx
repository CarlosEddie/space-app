import tags from './tags.json'
import styled from "styled-components";

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTiTle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => { 
    return <TagsContainer>
        <TagTiTle>Search by tags:</TagTiTle>
        <Div>
            {tags.map(tag => <Tag key={tag.id}>{tag.title}</Tag>)}
        </Div>
    </TagsContainer>
}

export default Tags;