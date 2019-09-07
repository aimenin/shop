import React from 'react'
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { PreviewCollectionContainer, TitleContainer, PreviewContainer } from './preview-collection.styles';

const previewCollection = ({title, items, history, match, routeName}) => {
    return (
        <PreviewCollectionContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => {
                        return (
                            <CollectionItem key={item.id} item={item}/>
                        )
                    })
                }
            </PreviewContainer>
        </PreviewCollectionContainer>
    )
}

export default withRouter(previewCollection);