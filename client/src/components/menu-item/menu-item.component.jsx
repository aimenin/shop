import React from 'react'
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentSubtitleContainer,
    TitleContainer
} from './menu-item.styles';

const menuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <MenuItemContainer
            size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer
                 imageUrl={imageUrl}
                 className="background-image"
            />
            <ContentContainer>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <ContentSubtitleContainer>Shop now</ContentSubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(menuItem);