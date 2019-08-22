import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';

import { PreviewCollectionContainer, TitleContainer, PreviewContainer } from './preview-collection.styles';

const previewCollection = ({title, items}) => {
    return (
        <PreviewCollectionContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

export default previewCollection;