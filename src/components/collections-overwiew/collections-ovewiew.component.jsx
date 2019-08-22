import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/preview-collection.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection
                        key = {id}
                        {...otherCollectionProps}
                    />
                ))
            }
        </CollectionOverviewContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);